import { FaBookmark, FaCommentDots } from "react-icons/fa"
import { FaShareNodes } from "react-icons/fa6";
export const UploadIcon = ({ width = '20px', height = '20px' }) => (
    <div className="flex gap-2 justify-center items-center">
        <svg
            width={width}
            data-e2e=""
            height={height}
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fillRule="evenodd" clipRule="evenodd"
                d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 
     8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 
     8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z">
            </path>
        </svg>
        <span className="css-y3rt08-SpanUploadText e18d3d946">Upload </span>
    </div>
)

export const InboxIcon = ({ width = '32px', height = '32px', className }) => (
    <span>
        <svg className={className}
            width={width}
            data-e2e=""
            height={height}
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705
          23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 
          23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 
          6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 
          11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 
          14.2985 19.6995 14 19.3313 14H12.6647Z">
            </path>
        </svg>
    </span>
)
export const SendIcon = ({ width = '28px', height = '28px', className }) => (
    <span>
        <svg className={className}
            width={width}
            data-e2e=""
            height={height}
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 
                8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 
                22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537
                 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 
                 17.3226 32.1966 17.612L20.377 24.8856Z">
            </path>
        </svg>
    </span>
)
export const HomeIcon = ({ width = '32px', height = '32px', className }) => (
    <svg width={width} data-e2e="" height={height}
        viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
            d="M23.0484 7.84003C23.6014 7.38666 24.3975 7.38666 24.9504 7.84001L41.051 21.04C41.5411 21.4418 41.7258 22.1082 41.5125 22.705C41.2991 
            23.3017 40.7338 23.7 40.1 23.7H37.769L36.5769 36.7278C36.4592 38.0149 35.3798 39 34.0873 39H13.9127C12.6202 39 11.5409 38.0149 11.4231 
            36.7278L10.231 23.7H7.89943C7.2657 23.7 6.70035 23.3017 6.487 22.705C6.27364 22.1083 6.45833 21.4418 6.9484 21.04L23.0484 7.84003ZM23.9995
             10.9397L12.0948 20.7H12.969L14.369 36H22.4994V28.3138C22.4994 27.7616 22.9471 27.3138 23.4994 27.3138H24.4994C25.0517 27.3138 25.4994 27.7616
              25.4994 28.3138V36H33.631L35.031 20.7H35.9045L23.9995 10.9397Z">
        </path>
    </svg>
)
export const HomeIconActive = ({ width = '32px', height = '32px', className }) => (
    <svg
        className={className}
        width={width} data-e2e="" height={height}
        viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737
         22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 
         38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798
          39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z">

        </path></svg>
)
export const ExploreIcon = ({ width = '32px', height = '32px', className }) => (
    <svg
        className={className}
        fill="currentColor" width={width} height={height}
        viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 37.4a13.4 13.4 0 1 0 0-26.8 13.4 13.4 0 0 0 0 26.8ZM40.5 24a16.5 16.5 0 1 1-33 0 16.5 16.5 0 0 1 33 0Z"> </path>
        <path d="M27.13 27.18 19 32.1a.6.6 0 0 1-.9-.63l1.84-9.33a2 2 0 0 1 .92-1.32L29 15.9a.6.6 0 0 1 .9.63l-1.84 9.33a2 2 0 0 1-.93 1.32Zm-5.04-.45 3.11-1.89.7-3.57-3.1 1.89-.7 3.57Z">
        </path>
    </svg>
)
export const ExploreIconActive = ({ width = '32px', height = '32px', className }) => (
    <svg
        className={className}
        width={width} height={height}
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M24 40.5a16.5 16.5 0 1 0 0-33 16.5 16.5 0 0 0 0 33Zm4.43-14.54c-.12.6-.49 1.12-1.01 1.44l-8.88 5.37a.65.65 0 0 1-.98-.69l2.01-10.18c.12-.6.49-1.12 1.01-1.44l8.88-5.37a.65.65 0 0 1 .98.69l-2.01 10.18Z">
        </path><path d="m21.92 26.89 3.4-2.05.76-3.9-3.4 2.06-.76 3.89Z"></path></svg>
)
export const FollowingIcon = ({ width = '32px', height = '32px', className }) => (
    <svg
        className={className}
        width={width} data-e2e="" height={height} viewBox="0 0 48 48"
        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
            d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672
             22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151
              12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801
               29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131
                6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 
                28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z">
        </path><path fillRule="evenodd" clipRule="evenodd" d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 
        29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303
         42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z">
        </path><path fillRule="evenodd" clipRule="evenodd" d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 
        19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z">
        </path>
    </svg>
)
export const FollowingIconActive = ({ width = '32px', height = '32px', className }) => (
    <svg
        className={className}
        width={width} data-e2e="" height={height}
        viewBox="0 0 48 48" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M25.5 17C25.5 21.1421 22.1421 24.5 18 24.5C13.8579 24.5 10.5 21.1421 10.5 17C10.5 12.8579 13.8579 9.5 18 9.5C22.1421 9.5 25.5 12.8579 25.5 17Z"></path><path d="M7.10396 34.7906C8.78769 30.2189 12.8204 27 18.0009 27C23.1818 27 27.2107 30.2213 28.8958 34.7898C29.3075 35.906 28.6141 37 27.5 37H8.5C7.38629 37 6.69289 35.9067 7.10396 34.7906Z"></path><path d="M40.6308 37H32C31.2264 34.1633 30.0098 31.5927 28.144 29.7682C29.5384 28.9406 31.1829 28.5 33 28.5C37.239 28.5 40.536 30.8992 41.9148 35.0108C42.2516 36.0154 41.5423 37 40.6308 37Z"></path><path d="M33 26.5C36.0376 26.5 38.5 24.0376 38.5 21C38.5 17.9624 36.0376 15.5 33 15.5C29.9624 15.5 27.5 17.9624 27.5 21C27.5 24.0376 29.9624 26.5 33 26.5Z"></path></svg>
)
export const LiveIcon = ({ width = '32px', height = '32px', className }) => (
    <svg
        className={className}
        width={width} data-e2e="" height={height}
        viewBox="0 0 32 32" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
            d="M7.78511 10.3334C6.95518 10.3334 6.33301 10.9792 6.33301 11.7143V20.2858C6.33301 21.0209 6.95518 21.6667 7.78511 21.6667H18.5744C19.4043 
            21.6667 20.0265 21.0209 20.0265 20.2858V17.5602C20.0265 17.1826 20.2392 16.8372 20.5763 16.6672C20.9135 16.4973 21.3177 16.5317 21.6212 16.7563L25.6663 
            19.7488V12.2513L21.6212 15.2439C21.3177 15.4684 20.9135 15.5029 20.5763 15.3329C20.2392 15.1629 20.0265 14.8175 20.0265 14.4399V11.7143C20.0265 10.9792
             19.4043 10.3334 18.5744 10.3334H7.78511ZM25.6855 12.2371C25.6831 12.2388 25.6839 12.2383 25.6839 12.2383L25.6855 12.2371ZM25.6716 12.2177C25.673 12.2212 
             25.6746 12.2243 25.6763 12.2269C25.6798 12.2324 25.6834 12.2355 25.6855 12.2371L25.6874 12.2383C25.6874 12.2383 25.6865 12.238 25.6839 12.2383M4.33301
              11.7143C4.33301 9.81952 5.90653 8.33337 7.78511 8.33337H18.5744C20.453 8.33337 22.0265 9.81953 22.0265 11.7143V12.4562L24.4963 10.629C25.0929 10.1877
               25.8879 10.1155 26.5542 10.4359C27.224 10.758 27.6663 11.4325 27.6663 12.1905V19.8096C27.6663 20.5676 27.224 21.2421 26.5542 21.5642C25.888 21.8846 
               25.0929 21.8124 24.4963 21.371L22.0265 19.5439V20.2858C22.0265 22.1806 20.453 23.6667 18.5744 23.6667H7.78511C5.90653 23.6667 4.33301 22.1806 4.33301 
               20.2858V11.7143Z">
        </path>
        <path d="M15 15.134C15.6667 15.5189 15.6667 16.4811 15 16.866L12 18.5981C11.3333 18.983 10.5 18.5019 10.5 17.7321L10.5 14.2679C10.5 13.4981 11.3333 13.017 12 13.4019L15 15.134Z">
        </path>
    </svg>
)
export const LiveIconActive = ({ width = '32px', height = '32px', className }) => (
    <svg
        className={className}
        width={width} data-e2e="" height={height}
        viewBox="0 0 48 48" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 17.5714C6.5 14.7292 8.86029 12.5 11.6782 12.5H27.8621C30.6799 12.5 33.0402 14.7292 33.0402 17.5714V18.6843L36.745 15.9435C37.6399 15.2815 38.8324 15.1731 39.8318 15.6537C40.8365 16.1369 41.5 17.1486 41.5 18.2857V29.7143C41.5 30.8514 40.8365 31.8631 39.8318 32.3463C38.8324 32.8269 37.6399 32.7185 36.745 32.0565L33.0402 29.3158V30.4286C33.0402 33.2708 30.6799 35.5 27.8621 35.5H11.6782C8.86029 35.5 6.5 33.2708 6.5 30.4286V17.5714Z"></path><path d="M23.25 23.134C23.9167 23.5189 23.9167 24.4811 23.25 24.866L17.25 28.3301C16.5833 28.715 15.75 28.2339 15.75 27.4641L15.75 20.5359C15.75 19.7661 16.5833 19.285 17.25 19.6699L23.25 23.134Z" fill="white"></path></svg>
)
export const ProfileIcon = ({ width = '32px', height = '32px', className }) => (
    <svg
        className={className}
        width={width} data-e2e="" height={height}
        viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
            d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 
            14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615
            33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 
            24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514
            36.9841 29.9391 33 24.0003 33Z">
        </path>
    </svg>
)

export const CheckFollow = ({ width = '14px', height = '14px', className }) => (
    <svg
        fontSize="14px" viewBox="0 0 48 48" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <g clipPath="url(#Icon_Color-Verified_Badge_svg__a)">
            <path d="M0 24a24 24 0 1 1 48 0 24 24 0 0 1-48 0Z" fill="#20D5EC"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M37.12 15.88a3 3 0 0 1 0 4.24l-13.5 13.5a3 3 0 0 1-4.24 0l-8.5-8.5a3 3 0 1 1 4.24-4.24l6.38 6.38 11.38-11.38a3 3 0 0 1 4.24 0Z" fill="#fff"></path>
        </g><defs><clipPath id="Icon_Color-Verified_Badge_svg__a"><path fill="#fff" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
)
export const IconMusic = ({ width = '14px', height = '14px', className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width} height={height} fill="rgba(22, 24, 35, 1)"
        className={className}>
        <use href="#Music_Note-6c3c6885"></use></svg>
)
export const UnLikeIcon = ({ width = '21px', height = '19px', color }) => (
    <svg
        width="24" data-e2e="" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#HeartFill_clip0)"><g filter="url(#HeartFill_filter0_d)">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 
            20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z"></path></g>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40179 12.1998C3.58902 14.6966 5.7592 16.9269 7.74989 18.75C9.5504 20.3989 10.9999 21.5 11.9999 21.5C12.9999 21.5 14.4094 20.4072 16.2499
             18.75C19.231 16.0657 22.4999 12.5 22.4999 8.49997C22.4999 8.41258 22.4983 8.32566 22.4952 8.23923C20.5671 13.6619 13.6787 18.5 11.75 18.5C10.3127 18.5 5.61087 15.8131 2.40179 12.1998Z" fillOpacity="0.03"></path></g>
        <defs><filter id="HeartFill_filter0_d" x="-0.9" y="1.05" width="25.8" height="24.05" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.2"></feOffset><feGaussianBlur stdDeviation="1.2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0">
            </feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><clipPath id="HeartFill_clip0"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
);

export const IsLikeIcon = ({ width = '21px', height = '19px', color }) => (
    <svg
        width="24" data-e2e="" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#LikeRedShadowColor_filter0_d)"><path fillRule="evenodd" clipRule="evenodd" d="M15 4.5C21 4.5 24 8.5 24 8.5C24 8.5 27 4.5 33 4.5C40 4.5 45 9.99998 45 17C45 25 38.4622 32.1314 32.5
         37.5C28.8191 40.8144 26 43 24 43C22 43 19.101 40.7978 15.5 37.5C9.63898 32.1325 3 25 3 17C3 9.99998 8 4.5 15 4.5Z" fill="#FE2C55"></path></g><path fillRule="evenodd" clipRule="evenodd" d="M4.80371 24.3995C7.17815 
         29.3932 11.5185 33.8538 15.4999 37.4999C19.1009 40.7978 21.9999 42.9999 23.9999 42.9999C25.9999 42.9999 28.819 40.8144 32.4999 37.4999C38.4621 32.1314 44.9999 24.9999 44.9999 16.9999C44.9999 16.8252 44.9968 16.6513 44.9906 16.4785C41.1344 27.3238 27.3575 37 23.5001 37C20.6255 37 
         11.2219 31.6262 4.80371 24.3995Z" fill="black" fill-opacity="0.03"></path><defs><filter id="LikeRedShadowColor_filter0_d" x="0.6" y="3.3" width="46.8" height="43.3" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1.2"></feOffset><feGaussianBlur stdDeviation="1.2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
);

export const CommentIcon = ({ width = '24px', height = '25px' }) => (
    <FaCommentDots width={width} height={height} className="text-[rbg(22,24,35)] text-[21px]" />
);

export const SaveIcon = ({ width = '24px', height = '25px' }) => (
    <FaBookmark width={width} height={height} className="text-[rbg(22,24,35)] text-[21px]" />
);

export const ShareIcon = ({ width = '24px', height = '25px' }) => (
    <FaShareNodes width={width} height={height} className="text-[rbg(22,24,35)] text-[21px]" />
);

export const VolumnIcon = ({ width = '24px', height = '24px' }) => (
    <svg
        width={width} data-e2e=""
        height={height} viewBox="0 0 48 48"
        fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
            d="M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 
            3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 
            19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625
             17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 
             36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 
             30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 
             12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293
              37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 
              18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z">
        </path>
    </svg>
)
export const MuteIcon = ({ width = '24px', height = '24px' }) => (
    <svg
        width="24" data-e2e=""
        height="24" viewBox="0 0 48 48"
        fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd" clipRule="evenodd"
            d="M25 10.8685C25 8.47242 22.3296 7.04325 20.3359 8.37236L10.3944 15H6C4.34315 15 3 16.3431 3 18V30C3 31.6568 4.34314 33 6 33H10.3944L20.3359 
            39.6276C22.3296 40.9567 25 39.5276 25 37.1315V10.8685ZM29.2929 18.1213L35.1716 24L29.2929 29.8787C28.9024 30.2692 28.9024 30.9024 29.2929 31.2929L30.7071 
            32.7071C31.0976 33.0976 31.7308 33.0976 32.1213 32.7071L38 26.8284L43.8787 32.7071C44.2692 33.0976 44.9024 33.0976 45.2929 32.7071L46.7071 31.2929C47.0976 
            30.9024 47.0976 30.2692 46.7071 29.8787L40.8284 24L46.7071 18.1213C47.0976 17.7308 47.0976 17.0976 46.7071 16.7071L45.2929 15.2929C44.9024 14.9024 44.2692 
            14.9024 43.8787 15.2929L38 21.1716L32.1213 15.2929C31.7308 14.9024 31.0976 14.9024 30.7071 15.2929L29.2929 16.7071C28.9024 17.0976 28.9024 17.7308 29.2929
             18.1213Z">
        </path>
    </svg>
)
export const SettingIcon = ({ width = '18px', height = '18px' }) => (
    <svg
        fill="currentColor" color="inherit"
        fontSize="inherit" viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <path
            d="M22.74 2.22a2 2 0 0 0-2.04-.9l-1.37.23a2 2 0 0 0-1.6 1.55l-.35 1.57c-.14.67-.61 1.2-1.24 1.48-1.3.57-2.53 1.29-3.67 2.12-.55.4-1.25.55-1.9.34l-1.54-.5a2 2 0 0 
            0-2.14.62l-.9 1.07A2 2 0 0 0 5.76 12l.75 1.43c.32.6.3 1.33 0 1.94a19.36 19.36 0 0 0-1.45 3.98 2.13 2.13 0 0 1-1.24 1.48l-1.5.61a2 2 0 0 0-1.24 1.85v1.4a2 2 0 0 0 
            1.24 1.84l1.5.61c.62.26 1.07.82 1.23 1.49.34 1.39.83 2.73 1.46 3.98.3.61.31 1.33 0 1.94l-.75 1.42a2 2 0 0 0 .23 2.22l.9 1.06a2 2 0 0 0 2.14.62l1.54-.49c.64-.2 1.35-.07
            1.9.34 1.14.83 2.37 1.55 3.67 2.12.63.28 1.1.82 1.24 1.48l.34 1.57a2 2 0 0 0 1.61 1.55l1.37.24a2 2 0 0 0 2.04-.9l.86-1.37c.36-.57 1-.92 1.67-.96 1.45-.1 2.85-.34
            4.19-.73a2.13 2.13 0 0 1 1.9.33l1.27.98a2 2 0 0 0 2.22.15l1.2-.7a2 2 0 0 0 .99-2l-.22-1.59c-.1-.67.17-1.34.66-1.81a19.6 19.6 0 0 0 2.74-3.25c.37-.57.99-.94 1.67-.97l1.6-.06a2
            2 0 0 0 1.8-1.32l.48-1.3a2 2 0 0 0-.54-2.17l-1.19-1.08a2.13 2.13 0 0 1-.66-1.8 19.74 19.74 0 0 0 0-4.27c-.07-.67.16-1.35.66-1.81l1.2-1.08a2 2 0 0 0 .53-2.16l-.48-1.31a2 
            2 0 0 0-1.8-1.32l-1.6-.06c-.68-.02-1.3-.4-1.67-.96a19.6 19.6 0 0 0-2.74-3.26 2.13 2.13 0 0 1-.66-1.81l.22-1.6a2 2 0 0 0-.98-2l-1.2-.7a2 2 0 0 0-2.23.16l-1.27.98c-.54.42-1.25.53-1.9.34a19.44
                19.44 0 0 0-4.19-.74 2.12 2.12 0 0 1-1.67-.96l-.86-1.36ZM39.1 24a15.1 15.1 0 1 1-30.2 0 15.1 15.1 0 0 1 30.2 0Z">
        </path>
    </svg>
)
export const ShareProfile = ({ width = '18px', height = '18px' }) => (
    <svg
        fill="currentColor" color="inherit"
        fontSize="inherit" viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <path d="M21.68 3.18a2 2 0 0 1 2.14.32l21.5 19a2 2 0 0 1-.02 3.02l-21.5 18.5a2 2 0 0 1-3.3-1.52v-9.97c-5.68.28-11.95 1.75-16.09 5.88A2 2 0 0 1 1 37c0-11.68 
     7.7-21.05 19.5-21.94V5a2 2 0 0 1 1.18-1.82ZM24.5 30.5v7.64l16.46-14.16L24.5 9.44V17a2 2 0 0 1-2.05 2c-8.4-.21-15.62 5.34-17.09 13.66 4.47-2.7 9.8-3.87 
     14.98-4.13.68-.03 1.22-.04 1.6-.04 1.19 0 2.56.26 2.56 2.01Z">
        </path>
    </svg>
)
export const ProfileLeftVideoIcon = ({ width = '20px', height = '20px' }) => (
    <svg
        fill="currentColor" viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width} height={height}>
        <path d="M11 8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2Zm0 18a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1h-2ZM22 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9Zm1 17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1h-2ZM34 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9Zm1 17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1h-2Z"></path>
    </svg>
)
export const ProfileLeftRepostsIcon = ({ width = '20px', height = '20px' }) => (
    <svg
        fill="currentColor" viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width} height={height}>
        <path d="M37.7 15v19.7l3.48-3.7a.7.7 0 0 1 .99-.03l1.46 1.37c.28.26.3.7.03.99l-6.26 6.66a2.3 2.3 0 0 1-3.34.01l-6.36-6.66a.7.7 0 0 1 .02-.99l1.45-1.38a.7.7 0 0 1 .99.02l4.14 4.34V15a4.3 4.3 0 0 0-4.3-4.3h-3.5a.7.7 0 0 1-.7-.7V8c0-.39.31-.7.7-.7H30a7.7 7.7 0 0 1 7.7 7.7ZM17.84 17.34 13.7 13v20a4.3 4.3 0 0 0 4.3 4.3h3.5c.39 0 .7.31.7.7v2a.7.7 0 0 1-.7.7H18a7.7 7.7 0 0 1-7.7-7.7V13.63l-3.48 3.7a.7.7 0 0 1-.99.03L4.37 16a.7.7 0 0 1-.03-.98l6.26-6.67a2.3 2.3 0 0 1 3.34-.01l6.36 6.66a.7.7 0 0 1-.02.99l-1.45 1.38a.7.7 0 0 1-.99-.02Z"></path>
    </svg>
)
export const ProfileLeftFavoritesIcon = ({ width = '20px', height = '20px' }) => (
    <svg
        fill="currentColor" viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width} height={height}>
        <path d="M30.5 7.15a4 4 0 0 1 4 4v6.25a1 1 0 0 1-.88 1H32.5a1 1 0 0 1-1-1v-5.25a2 2 0 0 0-2-2h-18a2 2 0 0 0-2 2v25.72l9.67-5 .05-.04a2.5 2.5 0 0 1 2.56 0l.05.03 11.77 5.62c.5.23.71.82.48 1.32l-.42.9a1 1 0 0 1-1.33.5v-.01L20.5 35.55l-10.16 5.27-.03.02a2.5 2.5 0 0 1-3.24-.55l-.1-.13a2.5 2.5 0 0 1-.46-1.26l-.01-.2V11.16a4 4 0 0 1 4-4h20Zm-4.65 12.5a1 1 0 0 1 1.42 0l14.58 14.58a1 1 0 0 1 0 1.41l-.7.71a1 1 0 0 1-1.42 0l-1.94-1.94a9.57 9.57 0 0 1-4.29 1.09c-3.02 0-5.62-1.66-7.36-3.2a16.9 16.9 0 0 1-2.12-2.23 9.58 9.58 0 0 1-.84-1.3c-.04-.1-.18-.4-.18-.77 0-.3.09-.56.12-.64.04-.14.1-.27.16-.4a12.87 12.87 0 0 1 3.17-3.88l-1.3-1.32a1 1 0 0 1 0-1.41l.7-.7Zm2.74 5.55a9.68 9.68 0 0 0-2.43 2.72 13.9 13.9 0 0 0 1.96 2.14c1.53 1.34 3.43 2.44 5.38 2.44.68 0 1.36-.14 2.01-.37L28.6 25.2Zm4.91-4.7c3.5 0 6.1 1.6 7.79 3.23a12.87 12.87 0 0 1 2.43 3.22c.06.14.12.27.16.4.03.1.12.35.12.65 0 .37-.14.68-.18.76a9.58 9.58 0 0 1-.85 1.3c-.4.53-.95 1.16-1.62 1.8l-2.12-2.13a13.68 13.68 0 0 0 1.6-1.81l-.16-.26c-.31-.5-.8-1.14-1.46-1.77a8.16 8.16 0 0 0-6.2-2.38l-2.57-2.58c.93-.27 1.95-.43 3.06-.43Z"></path>
    </svg>
)
export const ProfileLeftLikedIcon = ({ width = '20px', height = '20px' }) => (
    <svg
        fill="currentColor" viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width} height={height}>
        <path d="M8.71 10.56c4.24-4.2 10.93-4.15 15.29.63 4.36-4.78 11.05-4.84 15.29-.63a10.82 10.82 0 0 1 2.82 10.55L39.5 18.5c.06-2.1-.71-4.21-2.32-5.81-3.06-3.03-7.92-3.03-11.17.75l-.03.04-.92.91a1.5 1.5 0 0 1-2.12 0l-.92-.91-.03-.04c-3.25-3.78-8.11-3.78-11.17-.75a7.82 7.82 0 0 0 0 11.12L24 36.89l1.95-1.94 2.12 2.12-3.01 3a1.5 1.5 0 0 1-2.12 0L8.71 25.93a10.82 10.82 0 0 1 0-15.38Zm33.14 21.3a16.64 16.64 0 0 0 2.25-2.68 4 4 0 0 0 .22-.41c.04-.09.18-.4.18-.77 0-.3-.09-.56-.12-.64a8.38 8.38 0 0 0-.68-1.32c-.43-.67-1.07-1.5-1.91-2.31a11.15 11.15 0 0 0-10.85-2.8l2.57 2.58.49-.01c2.5 0 4.4 1.14 5.71 2.4a9.87 9.87 0 0 1 1.63 2.02 13.67 13.67 0 0 1-1.6 1.8l2.11 2.13Zm-5.84.27c-.65.24-1.33.37-2.01.37-1.95 0-3.85-1.1-5.37-2.44a13.9 13.9 0 0 1-1.97-2.14l.17-.26a9.87 9.87 0 0 1 2.26-2.45L36 32.13Zm-9.06-9.06a12.74 12.74 0 0 0-3.17 3.89c-.06.13-.12.27-.16.4-.03.08-.12.34-.12.64 0 .37.14.68.18.76a9.6 9.6 0 0 0 .84 1.3c.51.66 1.23 1.47 2.12 2.25 1.74 1.54 4.34 3.19 7.36 3.19 1.57 0 3.02-.44 4.3-1.08l1.93 1.93a1 1 0 0 0 1.42 0l.7-.7a1 1 0 0 0 0-1.42L27.77 19.65a1 1 0 0 0-1.42 0l-.7.7a1 1 0 0 0 0 1.42l1.3 1.3Z"></path>
    </svg>
)
export const EditProfileIcon = ({ width = '20px', height = '20px' }) => (
    <svg
        width="16" data-e2e=""
        height="16" viewBox="0 0 48 48"
        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M26.5858 5.08579C27.3479 4.32371 28.5767 4.30253 29.3646 5.03789L36.8646 12.0379C37.2612 12.408 37.4904 12.9232 37.4997 13.4655C37.5091 14.0078 37.2977 14.5307 36.9142 14.9142L16.9142 34.9142C16.5391 35.2893 16.0304 35.5 15.5 35.5H8.5C7.39543 35.5 6.5 34.6046 6.5 33.5V26C6.5 25.4696 6.71071 24.9609 7.08579 24.5858L26.5858 5.08579ZM28.0479 9.2805L10.5 26.8284V31.5H14.6716L32.622 13.5496L28.0479 9.2805Z"></path><path d="M7 41C7 40.4477 7.44772 40 8 40H41C41.5523 40 42 40.4477 42 41V43C42 43.5523 41.5523 44 41 44H8C7.44772 44 7 43.5523 7 43V41Z"></path></svg>
)