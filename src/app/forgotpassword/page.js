import Link from 'next/link'

export default function ForgotPassword() {
    return (
        <>
            <section className="bg-white h-screen">
                <div className="flex flex-col items-center justify-center px-4 md:px-6 py-6 md:py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-gray-900 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl ">
                               Forgot Password
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className=" bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                


                                <button
                                    type="submit"
                                    className="w-full text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Submit
                                </button>
                                <p className="text-sm text-center font-light text-gray-500 ">
                                    go back to login{' '}
                                    <Link href="/login" className="font-medium text-yellow-300 hover:underline ">
                                        Login
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}