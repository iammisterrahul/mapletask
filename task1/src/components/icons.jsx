export default function Icons({ name, height, width }) {
    if (name === 'facebook') {
        return (
            <svg
                fill="#000000"
                width={width}
                height={height}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
            </svg >
        )
    }

    if (name === 'google-plus') {
        return (
            <svg width={width} height={height} viewBox="0 -4 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -7443.000000)" fill="#000000">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M382,7287.70673 L382,7285.82629 L380,7285.82629 L380,7287.70673 L378,7287.70673 L378,7289.58717 L380,7289.58717 L380,7291.4676 L382,7291.4676 L382,7289.58717 L384,7289.58717 L384,7287.70673 L382,7287.70673 Z M376.4,7287.70673 C376.454,7287.70673 376.5,7288.5266 376.5,7288.92055 C376.5,7292.34671 374.058,7295 370.377,7295 C366.852,7295 364,7292.31568 364,7289.00141 C364,7285.6862 366.852,7283 370.377,7283 C372.099,7283 373.539,7283.58105 374.65,7284.55794 L372.919,7286.10648 C372.446,7285.67774 371.616,7285.14276 370.377,7285.14276 C368.2,7285.14276 366.423,7286.76087 366.423,7288.85098 C366.423,7290.94108 368.2,7292.48304 370.377,7292.48304 C372.901,7292.48304 373.849,7290.52738 373.994,7289.58717 L370,7289.58717 L370,7287.70673 L376.4,7287.70673 Z" id="google_plus-[#165]" />
                        </g>
                    </g>
                </g>
            </svg>
        )
    }

    if (name === 'linkedin') {
        return (
            <svg viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width={width} height={height} enableBackground="new 0 0 76.00 76.00" xmlSpace="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fill="#000000" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 17.4167,30.0833L 26.9167,30.0833L 26.9167,58.5833L 17.4167,58.5833L 17.4167,30.0833 Z M 31.6667,30.0833L 41.1667,30.0833L 41.1667,33.5574C 44.1836,31.7521 47.7589,30.0833 50.6667,30.0833C 57,30.0833 58.5833,36.4167 58.5833,36.4167L 58.5833,58.5833L 49.0833,58.5833L 49.0833,39.5833C 47.8558,35.9009 44.7251,36.0249 41.1667,39.2176L 41.1667,58.5833L 31.6667,58.5833L 31.6667,30.0833 Z M 22.1667,17.4167C 24.79,17.4167 26.9167,19.5433 26.9167,22.1667C 26.9167,24.79 24.79,26.9167 22.1667,26.9167C 19.5433,26.9167 17.4167,24.79 17.4167,22.1667C 17.4167,19.5433 19.5433,17.4167 22.1667,17.4167 Z " />
                </g>
            </svg>
        )
    }

    if (name === 'profile') {
        return (
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_15_82)">
                    <rect width="24" height="24" />
                    <g filter="url(#filter0_d_15_82)">
                        <path d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z" fill="#000000" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_15_82" x="2.55444" y="3.5" width="18.8911" height="19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_82" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_82" result="shape" />
                    </filter>
                    <clipPath id="clip0_15_82">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    }

    if (name === 'email') {
        return (
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341" />
            </svg>
        )
    }

    if (name === 'password') {
        return (
            <svg width={width} height={height} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_2" dataname="Layer 2">
                    <g id="invisible_box" dataname="invisible box">
                        <rect width="48" height="48" fill="none" />
                    </g>
                    <g id="Layer_7" dataname="Layer 7">
                        <g>
                            <path d="M39,18H35V13A11,11,0,0,0,24,2H22A11,11,0,0,0,11,13v5H7a2,2,0,0,0-2,2V44a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V20A2,2,0,0,0,39,18ZM15,13a7,7,0,0,1,7-7h2a7,7,0,0,1,7,7v5H15ZM37,42H9V22H37Z" />
                            <circle cx="15" cy="32" r="3" />
                            <circle cx="23" cy="32" r="3" />
                            <circle cx="31" cy="32" r="3" />
                        </g>
                    </g>
                </g>
            </svg>
        )
    }

    if (name === 'logo') {
        return (
            <svg
                dataname="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 394.3 76.5"
                width={width}
                height={height}
            >
                <path d="M156.6 69.4h-11.3V7.1h11.3zm49.6 0h-11v-4.6a15.4 15.4 0 01-12.6 5.7c-11.6 0-20.3-9.5-20.3-22.1s8.8-22.1 20.3-22.1a15.4 15.4 0 0112.6 5.8v-4.6h11zm-32.4-21c0 6.4 4.2 11.6 10.8 11.6s10.8-4.9 10.8-11.6-4.4-11.6-10.8-11.6-10.7 5.2-10.7 11.6zm88.7-34.7a7.2 7.2 0 01-14.4 0 7.2 7.2 0 1114.4 0zM261 69.4h-11.4v-42H261z" fill="black" />
                <path data-name="&lt;Trazado&gt;" d="M139.6 17.8a16.6 16.6 0 00-8-1.4c-3.2.4-4.9 2-4.9 5.9v5.1h13v10.1h-13v32h-11.3v-32h-7.8v-10h7.8v-5.3c0-9.9 5.2-16.3 15-16.3a23.4 23.4 0 019.3 1.8z" fill="black" />
                <path d="M235.1 60c-3.5 0-6.3-1.9-6.3-7.1V37.5H244v-10h-15.2V15h-11.3v12.5h-5.7v10h5.7v16.2c0 10.9 5.3 16.8 15.7 16.8A22.9 22.9 0 00244 68l-4.3-9.1a12.3 12.3 0 01-4.6 1.1zm113.8-11.6c0 12.6-9.7 22.1-22.7 22.1s-22.7-9.4-22.7-22.1 9.6-22.1 22.7-22.1 22.7 9.5 22.7 22.1zm-33.9 0c0 6.8 4.8 11.6 11.1 11.6s11.2-4.8 11.2-11.6-4.8-11.6-11.2-11.6-11 4.8-11 11.6zm79.3-5.7v26.7h-11.4V46.3c0-6.1-3-9.4-8.2-9.4s-8.9 3.2-8.9 9.5v23h-11.2v-42h11v4.9c3-4.5 7.6-6.1 12.3-6.1 9.6.1 16.4 6.8 16.4 16.5z" fill="black" />
                <path d="M298 55.7a12.4 12.4 0 01-8.2 4.2h-.9l-1.8-.2a10 10 0 01-7.4-5.6 13.2 13.2 0 01-1.2-5.8 13 13 0 011.3-5.9 10.1 10.1 0 017.5-5.5h2.4a11.7 11.7 0 018.3 4.2l5.5-9.6a19.9 19.9 0 00-8.1-4.3 23.4 23.4 0 00-6.1-.8 25.2 25.2 0 00-7.5 1.1 20.9 20.9 0 00-8 4.6 21.9 21.9 0 00-6.8 16.4 21.9 21.9 0 006.7 16.3 20.9 20.9 0 008 4.6 25.2 25.2 0 007.7 1.2 23.6 23.6 0 006.2-.8 20 20 0 008.1-4.4z" fill="black" />
                <path d="M46.3 26.5H26.9L20.8 16h31.6l9.2-16H9.4a9.3 9.3 0 00-8.1 4.7 9.3 9.3 0 000 9.4l33.3 57.7a9.4 9.4 0 0016.2 0l1.1-1.9-15.3-26.6z" fill="#4ad295" />
                <path d="M84.2 4.7A9.3 9.3 0 0076.1 0h-2.3l-25 43.3 9.2 16L84.2 14a9.3 9.3 0 000-9.3z" fill="#4ad295" />
            </svg>
        )
    }
}