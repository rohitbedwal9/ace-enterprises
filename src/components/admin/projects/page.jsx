'use client';
import { database, storage } from '@/utils/firebase';
import { onValue, ref, remove, set, update } from 'firebase/database';
import {
  ref as sRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import ProjectRow from '../projectRow';
import Modal from '../modal';
import { ToastContainer, toast } from 'react-toastify';

export default function Projects() {

  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const dbref = ref(database, 'projects');
    const unsubscribe = onValue(dbref, (snapshot) => {
      let arr = [];
      snapshot.forEach((doc) => {
        arr.push({ ...doc.val(), id: doc.key });
      });
      setProjects(arr);
    });
    return () => unsubscribe;
  }, []);

  const handleDelete = async (project) => {
    let x = confirm('Are you sure?');


    if (x) {
      const fileRef = sRef(storage, `files/${project.id}.pdf`);
      const imageRef = sRef(storage, `images/project/${project.id}`);
      await deleteObject(imageRef);
      await deleteObject(fileRef);
      const dbref = ref(database, 'projects/' + project.id);
      await remove(dbref);
      toast.success("Project have been delete successfully")
    }
  };

  const handleEditOpen = async (project) => {
    setProject(project);
    setShowModal(true);
  };

  const handleNew = async (title, desc, imageUpload, file, isEdit, id) => {
    toast.info('Please wait project is creating...');
    const imageRef = sRef(storage, `images/project/${id}`);
    const fileRef = sRef(storage, `files/${id}.pdf`);
 
      uploadBytes(fileRef, file)
        .then(() => {
          toast.success('file uploaded');
        })
        .catch((error) => {
          toast.error(error.message);
        });
    uploadBytes(imageRef, imageUpload)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {

            if (isEdit) {
              const dbref = ref(database, 'projects/' + id)
              update(dbref, {
                title: title,
                desc: desc,
                imgURL: url,
                downloads: project.downloads
              })
              toast.success("Project have been edit successfully")
            }
            else {
              const dbref = ref(database, 'projects/' + id)
              set(dbref, {
                title: title,
                desc: desc,
                imgURL: url,
                downloads: 0,
                id: id
              })
              toast.success("Project have been created successfully")
            }
          })
          .catch((error) => {
            toast.error(error.message)
          });
      })
  }

  return (
    <div className="w-[99%]">
      <div className="w-full flex flex-col my-5 ">
        <div className="flex justify-end sm:mx-12 lg:mx-10">
          <button
            onClick={() => {
              setProject(null);
              setShowModal(true);
            }}
            className="bg-yellow-400 px-5 py-2 rounded-full"
          >
            Add New Projects
          </button>
        </div>
        <div className="overflow-y-scroll w-[98%] min-h-screen no-scrollbar overflow-x-auto md:overflow-x-hidden sm:mx-6 lg:mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Project Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Project Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Project Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No. of Downloads
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects &&
                    projects.map((project, index) => (
                      <ProjectRow
                        key={index}
                        project={project}
                        index={index}
                        handleEditOpen={handleEditOpen}
                        setShowModal={setShowModal}
                        handleDelete={handleDelete}
                      />
                    ))}
                </tbody>
              </table>

              <Modal
                project={project}
                showModal={showModal}
                setShowModal={setShowModal}
                handleNew={handleNew}
              />

            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}