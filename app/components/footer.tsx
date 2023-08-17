import Image from 'next/image'
import logo from "/public/logo_blazkowski.png"
import Link from 'next/link'

export default function Footer() {
    return (

        <>
            <div className="flex justify-center pt-8 mx-auto bg-primary">
                <div className="container w-full h-1 mx-8 bg-white"></div>
            </div>
            <div className="bg-primary py-8">
                <div className="mx-auto px-4 container max-w-7xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                    <div className="w-full md:w-1/3 text-white md:text-left text-center">
                        <p className='font-bold'>Kontakt</p>
                        <p className=''>Grunwaldzka 5, 37-700 Przemyśl</p>
                        <p className=''>(16) 670 45 83</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Link href="/">
                            <Image className='w-40 h-auto mx-auto' alt="błakowski logo" src={logo} />
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="flex md:space-x-2 mx-auto">
                            <a
                                href="https://www.instagram.com/blazkowscy_and_barberroom/"
                                target="blank"
                                className=""
                            >
                                <svg
                                    className='w-10 h-auto'
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="24" height="24" fill="#333333"></rect>
                                    <path
                                        d="M15.6377 3H8.3623C5.40551 3 3 5.40551 3 8.3623V15.6377C3 18.5945 5.40551 21 8.3623 21H15.6377C18.5945 21 21 18.5945 21 15.6377V8.3623C21 5.40551 18.5945 3 15.6377 3ZM19.1892 15.6377C19.1892 17.5991 17.5991 19.1892 15.6377 19.1892H8.3623C6.40088 19.1892 4.8108 17.5991 4.8108 15.6377V8.3623C4.8108 6.40084 6.40088 4.8108 8.3623 4.8108H15.6377C17.5991 4.8108 19.1892 6.40084 19.1892 8.3623V15.6377Z"
                                        fill="white"
                                    ></path>
                                    <path
                                        d="M11.9997 7.34449C9.43269 7.34449 7.34426 9.43291 7.34426 11.9999C7.34426 14.5669 9.43269 16.6553 11.9997 16.6553C14.5667 16.6553 16.6551 14.5669 16.6551 11.9999C16.6551 9.43288 14.5667 7.34449 11.9997 7.34449ZM11.9997 14.8446C10.4286 14.8446 9.15506 13.571 9.15506 11.9999C9.15506 10.4289 10.4287 9.15529 11.9997 9.15529C13.5708 9.15529 14.8443 10.4289 14.8443 11.9999C14.8443 13.571 13.5707 14.8446 11.9997 14.8446Z"
                                        fill="white"
                                    ></path>
                                    <path
                                        d="M16.6645 8.495C17.2806 8.495 17.7801 7.99555 17.7801 7.37946C17.7801 6.76336 17.2806 6.26392 16.6645 6.26392C16.0484 6.26392 15.549 6.76336 15.549 7.37946C15.549 7.99555 16.0484 8.495 16.6645 8.495Z"
                                        fill="white"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/studio.blazkowska/"
                                target="blank"
                                className=""
                            >
                                <svg
                                    className='w-10 h-auto'
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="24" height="24" fill="#333333"></rect>
                                    <path
                                        d="M18.5753 3H5.42651C4.08695 3 3.00098 4.08593 3.00098 5.42554V18.5744C3.00098 19.914 4.08691 20.9999 5.42651 20.9999H11.9114L11.9225 14.5677H10.2514C10.0342 14.5677 9.85795 14.3921 9.85712 14.1749L9.8491 12.1016C9.84827 11.8832 10.0251 11.7058 10.2434 11.7058H11.9115V9.70238C11.9115 7.37746 13.3314 6.11152 15.4054 6.11152H17.1072C17.325 6.11152 17.5015 6.28805 17.5015 6.50583V8.2541C17.5015 8.4718 17.3251 8.64828 17.1074 8.64841L16.063 8.6489C14.9351 8.6489 14.7167 9.18486 14.7167 9.97142V11.7058H17.1951C17.4313 11.7058 17.6145 11.912 17.5866 12.1465L17.3409 14.2199C17.3174 14.4183 17.1491 14.5678 16.9494 14.5678H14.7278L14.7167 21H18.5754C19.9149 21 21.0008 19.9141 21.0008 18.5745V5.42554C21.0008 4.08593 19.9149 3 18.5753 3Z"
                                        fill="white"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}




