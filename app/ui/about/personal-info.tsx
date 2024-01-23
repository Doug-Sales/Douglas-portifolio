

export default function PesonalInfo() {
  return (
    <div>

      <h3 className={`text-4xl font-syne mt-10 p-5 text-gray-200 dark:text-white`}>Informação Pessoal</h3>
      <div className="grid grid-cols-2 gap-6">

        <div className="flex">
          <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
            <svg stroke="currentColor" fill="currentColor" className="p-1" strokeWidth="0" viewBox="0 0 320 512" height="1.875rem" width="1.875rem" xmlns="http://www.w3.org/2000/svg"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-lite dark:text-color-910">Phone</p>
            <h6 className="font-medium dark:text-white">
              <a className="hover:text-[#FA5252] duration-300 transition" href="/contact">
                (19) 9 9732-1279
              </a>
            </h6>

          </div>
        </div>

        <div className="flex ">
          <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
            <svg stroke="currentColor" className="p-1" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12,2C8.1,2,5,5.1,5,9c0,6,7,13,7,13s7-7.1,7-13C19,5.1,15.9,2,12,2z M12,11.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5 s2.5,1.1,2.5,2.5S13.4,11.5,12,11.5z"></path>
                <rect ></rect>
              </g>
            </svg>
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-lite dark:text-color-910">Location</p>
            <h6 className="font-medium dark:text-white">
              <a className="hover:text-[#FA5252] duration-300 transition" href="#">
                Valinhos-SP
              </a>
            </h6>
          </div>
        </div>

        <div className="flex">
          <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 ">
            <svg stroke="currentColor" fill="currentColor" className="p-1" strokeWidth="0" viewBox="0 0 512 512" width="1.875rem" height="2rem" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M418.048,111.18V52.221c0-10.572-8.571-19.143-19.143-19.143H113.094c-10.572,0-19.143,8.571-19.143,19.143v58.959C42.42,111.18,0,145.85,0,197.807v194.489c0,48.103,39.164,86.627,86.639,86.627h338.721c47.41,0,86.639-38.457,86.639-86.627V197.807C512,146.132,469.936,111.18,418.048,111.18z M418.048,149.465c8.395,0,20.349-0.946,33.877,7.967l-33.877,22.171V149.465z M379.763,71.364c0,13.405,0,120.275,0,133.308l-112.064,73.34c-7.092,4.639-16.275,4.661-23.392,0.003l-112.068-73.343c-0.001-13.031-0.001-119.908-0.001-133.308H379.763z M93.952,149.465v30.138l-33.878-22.172C73.527,148.569,85.409,149.465,93.952,149.465z M39.042,189.423c127.899,83.704-1.039-0.666,126.763,82.973L38.285,389.276C38.285,180.577,37.961,195.591,39.042,189.423z M425.361,440.638H86.639v-0.001c-12.54,0-24.379-4.893-33.243-13.279L198.862,294.03c61.984,40.564,69.821,29.092,114.276,0l145.466,133.329C449.739,435.746,437.9,440.638,425.361,440.638z M473.714,389.274L346.195,272.395c127.7-83.571-1.038,0.667,126.763-82.973C474.038,195.586,473.714,180.611,473.714,389.274z"></path>
                <path d="M196.897,139.358h118.208c10.572,0,19.143-8.571,19.143-19.143c0-10.572-8.571-19.143-19.143-19.143H196.897c-10.572,0-19.143,8.571-19.143,19.143C177.754,130.787,186.324,139.358,196.897,139.358z"></path>
                <path d="M171.373,207.033h169.255c10.572,0,19.143-8.571,19.143-19.143c0-10.572-8.571-19.143-19.143-19.143H171.373c-10.572,0-19.143,8.571-19.143,19.143C152.231,198.463,160.8,207.033,171.373,207.033z"></path>
              </g>
            </svg>
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-lite dark:text-color-910">Email</p>
            <h6 className="font-medium dark:text-white">
              <a className="hover:text-[#FA5252] duration-300 break-words transition" href="#">
                fullstack@<br />douglasmedeiros.tech
              </a>
            </h6>
          </div>
        </div>
        
        <div className="flex items-center">
          <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
            <svg stroke="currentColor" fill="" strokeWidth="0" viewBox="0 0 24 24" width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"></path>
              </g>
            </svg>

          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-lite dark:text-color-910">Birthday</p>
            <h6 className="font-medium dark:text-white">
              <a className="hover:text-[#FA5252] duration-300 transition" href="#">
                10/1992
              </a>
            </h6>

          </div>
        </div>
      </div>
    </div>
  )
}