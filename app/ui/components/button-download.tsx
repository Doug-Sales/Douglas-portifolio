'use client'


export async function ButtonDownload() {
  const PDF_FILE_URL = 'curriculo/Douglas-Medeiros-Curriculo.pdf'

  
  const handleDownload = (url: any) => {

    const a = document.createElement('a');
    a.href = PDF_FILE_URL;
    a.setAttribute('download', 'Douglas-Medeiros-Curriculo.pdf')
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div className="flex justify-center pt-9 pb-16 rounded-b-xl ">
      <div className="bg-opacity-100  group rounded-xl border text-gray-100 backdrop-blur-sm font-semibold text-xl transition duration-300 ease-in-out  border-sky-400/40 hover:bg-sky-400/50 bg-sky-300/30">
        <button type="button" className="px-14 flex gap-3 py-3 opacity-100" onClick={handleDownload}>
          <svg className="text-orange-400 " width={30} height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M24 12a5 5 0 0 1-5 5h-2v-1h2a3.99 3.99 0 0 0 .623-7.934l-.79-.124-.052-.798a5.293 5.293 0 0 0-10.214-1.57L8.17 6.59l-.977-.483A2.277 2.277 0 0 0 6.19 5.87a2.18 2.18 0 0 0-1.167.339 2.206 2.206 0 0 0-.98 1.395l-.113.505-.476.2A4 4 0 0 0 5 16h3v1H5a5 5 0 0 1-1.934-9.611 3.21 3.21 0 0 1 1.422-2.025 3.17 3.17 0 0 1 1.702-.493 3.268 3.268 0 0 1 1.446.34 6.293 6.293 0 0 1 12.143 1.867A4.988 4.988 0 0 1 24 12zm-11-1h-1v10.292l-2.646-2.646-.707.707 3.854 3.854 3.853-3.852-.707-.707L13 21.294z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </g>
          </svg>
          Download CV
        </button>
      </div>
    </div>

  )
}