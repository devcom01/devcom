import React, { useState, useEffect, useRef } from "react";
import ReactPrint from "react-to-print";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import jsPDF from "jspdf";
import avatar from "../../assets/imgs/face.jpg";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../Firebase";
import html2canvas from "html2canvas";

const resume = (props) => {
  const [ link, setLink] = useState("");
  const [docState, setDocState] = useState("");
  const { contacts, experiences, educations, profil } = props.resume;

  useEffect(
    () => console.log(educations, contacts, experiences, profil),
    [educations, contacts, experiences, profil]
  );
  const ref2 = useRef();
  const handleGeneratePdf = () => {
    const docpdf = new jsPDF({
      format: "a1",
      unit: "px",
      width: "200",
    });

    docpdf.html(ref2.current, {
      async callback(docpdf) {
        var x = await docpdf.save("document");

        const pdfData = x.output("blob");
        const pdfBlob = new Blob([pdfData], { type: "application/pdf" });
        setDocState(pdfBlob);
      },
    });
  };

  // const savepdfstorage = () => {
  //   console.log("docState", docState);
  //   if (docState == null) return;
  //   const pdfRef = ref(storage, `pdf/${docState}`);
  //   uploadBytes(pdfRef, docState).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setpdf((prev) => [...prev, url]);
  //       console.log(url, "url");
  //     });
  //   });
  // };
  const savecv = async (e) => {
     try {
      const userRef = doc(db, "users", "gv04GaM5lZgHlYTe2jZZ4eMqORj2");
      

      await updateDoc(userRef, {
        cvv: e,
      });
  
      console.log("CV saved successfully!");
    } catch (error) {
      console.error("Error saving CV:", error);
    }
  };
const haifa=  async () => {
  try {
    const element = ref2.current;

    const canvas = await html2canvas(element);
    const imgBlob = await new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      });
    });

    const storageRef = ref(storage, "pdf/my-cv.jpg");
    await uploadBytes(storageRef, imgBlob);

    const downloadUrl = await getDownloadURL(storageRef);
    console.log(downloadUrl)
    

    console.log("Image generated and stored successfully!");
    savecv(downloadUrl)
  } catch (error) {
    console.error("Error generating and storing image:", error);
  }
}
  return (
    <div>
     

      <section class="section dark:bg-gray-900">
        <div class="box-outer">
          <div class="resume-box" ref={ref2}>
            <div class="box-1">
              <div class="content">
                <div class="flex z-50 items-center justify-center mb-10">
                  <img
                    src={avatar}
                    alt=""
                    class="rounded-full w-32 border-2 border-gray-300"
                  />
                </div>

                <h1 class="text-gray-400 uppercase tracking-widest text-lg font-bold">
                  Contact
                </h1>
                <hr class="w-1/6 mb-5" />

                {contacts[0] && (
                  <h1 class="flex text-sm">
                    <svg
                      class=" fill-yellow-400 w-6 h-6 "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.005 9C7.005 8.45 7.45 8 8 8H16C16.55 8 17 8.45 17 9V15C17 15.55 16.55 16 16 16H8C7.45 16 7 15.55 7 15L7.005 9ZM12 12.5L8.00001 9.99997V15H16V9.99997L12 12.5ZM12 11.5L8.00001 9.00001H16L12 11.5Z"
                        ></path>{" "}
                      </g>
                    </svg>

                    {contacts[0].Email}
                  </h1>
                )}
                {contacts[0] && (
                  <h1 class="flex text-sm">
                    <svg
                      class=" fill-yellow-400 w-6 h-6 "
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 490.732 490.732"
                      xml:space="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M472.366,0.003H18.36C8.219,0.003,0,8.222,0,18.363v454.005c0,10.143,8.219,18.361,18.36,18.361h454.012 c10.142,0,18.36-8.219,18.36-18.361V18.363C490.727,8.222,482.507,0.003,472.366,0.003z M130.375,403.808 c0,6.762-5.478,12.238-12.24,12.238H69.132c-6.756,0-12.24-5.477-12.24-12.238V189.625c0-6.763,5.484-12.24,12.24-12.24h49.003 c6.762,0,12.24,5.477,12.24,12.24V403.808z M130.375,127.482c0,6.763-5.478,12.24-12.24,12.24H69.132 c-6.756,0-12.24-5.478-12.24-12.24V83.969c0-6.763,5.484-12.24,12.24-12.24h49.003c6.762,0,12.24,5.477,12.24,12.24V127.482z M433.835,403.808c0,6.762-5.483,12.238-12.24,12.238h-49.003c-6.763,0-12.24-5.477-12.24-12.238v-90.436 c0-29.988-1.566-49.383-4.712-58.189c-3.14-8.807-8.237-15.649-15.3-20.526c-7.062-4.884-15.558-7.32-25.496-7.32 c-12.729,0-24.149,3.488-34.26,10.459c-10.11,6.977-17.038,16.211-20.79,27.717c-3.745,11.506-5.618,32.779-5.618,63.807v74.488 c0,6.762-5.483,12.238-12.24,12.238h-49.003c-6.756,0-12.24-5.477-12.24-12.238V189.625c0-6.763,5.483-12.24,12.24-12.24h43.771 c6.763,0,12.24,5.477,12.24,12.24v16.316c0,6.763,3.312,7.852,7.858,2.852c22.864-25.123,50.753-37.687,83.673-37.687 c16.212,0,31.028,2.919,44.455,8.758c13.422,5.838,23.58,13.292,30.466,22.356c6.885,9.063,11.683,19.351,14.382,30.857 c2.699,11.505,4.058,27.98,4.058,49.426V403.808L433.835,403.808z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    {contacts[0].Linkedin}
                  </h1>
                )}
                {contacts[0] && (
                  <h1 class="flex  text-sm">
                    <svg
                      class=" fill-yellow-400 w-6 h-6 "
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M24.92 12.183c0-1.586-.604-2.864-1.585-3.83.172-.547.398-1.763-.229-3.321 0 0-1.114-.348-3.628 1.315a12.695 12.695 0 0 0-3.081-.366c-1.154 0-2.322.143-3.409.44-2.596-1.747-3.74-1.391-3.74-1.391-.748 1.847-.287 3.215-.145 3.554-.883.936-1.414 2.133-1.414 3.594 0 1.111.128 2.099.44 2.964l.325.732c.879 1.614 2.606 2.655 5.677 2.983-.434.289-.885.779-1.062 1.612-.594.28-2.475.966-3.603-.944 0 0-.633-1.148-1.842-1.235 0 0-1.174-.017-.08.722 0 0 .782.367 1.326 1.738 0 0 .705 2.342 4.114 1.593v2.417s-.076.857-.867 1.143c0 0-.469.312.034.497 0 0 2.205.174 2.205-1.604v-2.643s-.09-1.047.429-1.404v4.332s-.032 1.031-.576 1.421c0 0-.362.646.433.468 0 0 1.517-.211 1.584-1.967l.035-4.383h.363l.033 4.383c.076 1.748 1.59 1.967 1.59 1.967.793.179.429-.468.429-.468-.54-.389-.579-1.421-.579-1.421v-4.297c.52.402.436 1.369.436 1.369v2.643c0 1.777 2.2 1.604 2.2 1.604.505-.186.036-.498.036-.498-.793-.286-.867-1.143-.867-1.143v-3.461c0-1.346-.574-2.056-1.137-2.435 3.277-.318 4.845-1.368 5.572-2.99-.015.027.26-.726.26-.726.25-.859.325-1.855.325-2.963h-.002z"></path>
                      </g>
                    </svg>
                    {contacts[0].Github}
                  </h1>
                )}
                {contacts[0] && (
                  <h1 class="flex text-sm">
                    <svg
                      class=" fill-yellow-400 w-6 h-6 "
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>phone</title>{" "}
                        <path d="M0 10.375c0 0.938 0.344 1.969 0.781 3.063s1 2.125 1.438 2.906c1.188 2.063 2.719 4.094 4.469 5.781s3.813 3.094 6.125 3.938c1.344 0.531 2.688 1.125 4.188 1.125 0.75 0 1.813-0.281 2.781-0.688 0.938-0.406 1.781-1.031 2.094-1.781 0.125-0.281 0.281-0.656 0.375-1.094 0.094-0.406 0.156-0.813 0.156-1.094 0-0.156 0-0.313-0.031-0.344-0.094-0.188-0.313-0.344-0.563-0.5-0.563-0.281-0.656-0.375-1.5-0.875-0.875-0.5-1.781-1.063-2.563-1.469-0.375-0.219-0.625-0.313-0.719-0.313-0.5 0-1.125 0.688-1.656 1.438-0.563 0.75-1.188 1.438-1.625 1.438-0.219 0-0.438-0.094-0.688-0.25s-0.5-0.281-0.656-0.375c-2.75-1.563-4.594-3.406-6.156-6.125-0.188-0.313-0.625-0.969-0.625-1.313 0-0.406 0.563-0.875 1.125-1.375 0.531-0.469 1.094-1.031 1.094-1.719 0-0.094-0.063-0.375-0.188-0.781-0.281-0.813-0.656-1.75-0.969-2.656-0.156-0.438-0.281-0.75-0.313-0.906-0.063-0.094-0.094-0.219-0.125-0.375s-0.094-0.281-0.125-0.406c-0.094-0.281-0.25-0.5-0.406-0.625-0.156-0.063-0.531-0.156-0.906-0.188-0.375 0-0.813-0.031-1-0.031-0.094 0-0.219 0-0.344 0.031h-0.406c-1 0.438-1.719 1.313-2.25 2.344-0.5 1.031-0.813 2.188-0.813 3.219z"></path>{" "}
                      </g>
                    </svg>

                    {contacts[0].Phone}
                  </h1>
                )}
                {contacts[0] && (
                  <h1 class="flex text-sm">
                    <svg
                      class=" fill-yellow-400 w-6 h-6 "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <circle
                          cx="12"
                          cy="10"
                          r="3"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></circle>{" "}
                        <path
                          d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    {contacts[0].Adress}
                  </h1>
                )}
                <hr class="my-5" />
                <h1 class="text-gray-400 mt-2 uppercase tracking-widest text-lg font-bold">
                  EDUCATION
                </h1>

                <hr class="w-1/6 mb-5" />

                {educations && (
                  <div>
                    {educations.map((ed) => (
                      <div class="content-2">
                        <h1 class="text-gray-400 text-sm uppercase font-semibold tracking-wider">
                          {ed.university}
                        </h1>

                        <h1 class="text-gray-500 text-sm">
                          <p class="">
                            {" "}
                            {ed.diploma} {ed.dates} {ed.datef}{" "}
                          </p>
                          <br />
                          <p class="">{ed.city}</p>
                        </h1>
                      </div>
                    ))}
                  </div>
                )}

                <br />

                <hr class="my-5" />
                <h1 class="text-gray-400 mt-2 uppercase tracking-widest text-lg font-bold">
                  SKILLS
                </h1>
                <hr class="w-1/6 mb-5" />
                <ul>
                  <li class="text-gray-500 text-sm list-disc ml-4">
                    Adobe Photoshop
                  </li>
                  <li class="text-gray-500 text-sm list-disc ml-4">
                    Adobe Illustrator
                  </li>
                  <li class="text-gray-500 text-sm list-disc ml-4">
                    Adobe After Effects
                  </li>
                  <li class="text-gray-500 text-sm list-disc ml-4">
                    Microsoft Power Point
                  </li>
                  <li class="text-gray-500 text-sm list-disc ml-4">
                    Microsoft Word
                  </li>
                  <li class="text-gray-500 text-sm list-disc ml-4 mb-1">
                    Adobe InDesign
                  </li>
                </ul>
              </div>
            </div>

            <div class="box-2">
              <div class="intro">
                {contacts[0] && (
                  <h1>
                    {contacts[0].Firstname} {contacts[0].Lastname}
                  </h1>
                )}

                {contacts[0] && <p>{contacts[0].JobTitle}</p>}
                {profil[0] && <p class="head">{profil[0].about}</p>}
              </div>

              <div class="content-2">
                <h1 class="head">Experience</h1>
                {experiences[0] && (
                  <div>
                    {experiences.map((ed) => (
                      <div>
                        <p class="para-1">
                          {ed.job} ({ed.dates} -- {ed.datef})
                        </p>
                        <p class="para-2">{ed.about}</p>
                      </div>
                    ))}{" "}
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            class="download"
            onClick={(e) => {
              // handleGeneratePdf(e), savepdfstorage(e), savecv(e);
              haifa( )
            }}
          >
            Download
          </button>
        </div>
      </section>
    </div>
  );
};

export default resume;
