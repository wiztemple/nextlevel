import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-t-[#EBEBEB] sm:pb-20">
      <div className="pt-28 sm:pt-24 sm:px-32 px-5">
        <div>
          <span className="block text-center text-[#999999] text-lg tracking-widest">
            FOLGE UNS
          </span>
          <div className="flex justify-center sm:w-full social-links flex-wrap">
            <div className="flex sm:gap-8 gap-4 pt-3">
              <a
                href="https://www.instagram.com/nextlevel.erlebnisse/"
                target="_blank"
              >
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4344 6.98242C18.3719 6.98242 21.6219 10.2324 21.6219 14.1699C21.6219 18.1699 18.3719 21.3574 14.4344 21.3574C10.4344 21.3574 7.24688 18.1699 7.24688 14.1699C7.24688 10.2324 10.4344 6.98242 14.4344 6.98242ZM14.4344 18.8574C16.9969 18.8574 19.0594 16.7949 19.0594 14.1699C19.0594 11.6074 16.9969 9.54492 14.4344 9.54492C11.8094 9.54492 9.74688 11.6074 9.74688 14.1699C9.74688 16.7949 11.8719 18.8574 14.4344 18.8574ZM23.5594 6.73242C23.5594 7.66992 22.8094 8.41992 21.8719 8.41992C20.9344 8.41992 20.1844 7.66992 20.1844 6.73242C20.1844 5.79492 20.9344 5.04492 21.8719 5.04492C22.8094 5.04492 23.5594 5.79492 23.5594 6.73242ZM28.3094 8.41992C28.4344 10.7324 28.4344 17.6699 28.3094 19.9824C28.1844 22.2324 27.6844 24.1699 26.0594 25.8574C24.4344 27.4824 22.4344 27.9824 20.1844 28.1074C17.8719 28.2324 10.9344 28.2324 8.62188 28.1074C6.37188 27.9824 4.43438 27.4824 2.74688 25.8574C1.12188 24.1699 0.621876 22.2324 0.496876 19.9824C0.371876 17.6699 0.371876 10.7324 0.496876 8.41992C0.621876 6.16992 1.12188 4.16992 2.74688 2.54492C4.43438 0.919922 6.37188 0.419922 8.62188 0.294922C10.9344 0.169922 17.8719 0.169922 20.1844 0.294922C22.4344 0.419922 24.4344 0.919922 26.0594 2.54492C27.6844 4.16992 28.1844 6.16992 28.3094 8.41992ZM25.3094 22.4199C26.0594 20.6074 25.8719 16.2324 25.8719 14.1699C25.8719 12.1699 26.0594 7.79492 25.3094 5.91992C24.8094 4.73242 23.8719 3.73242 22.6844 3.29492C20.8094 2.54492 16.4344 2.73242 14.4344 2.73242C12.3719 2.73242 7.99688 2.54492 6.18438 3.29492C4.93438 3.79492 3.99688 4.73242 3.49688 5.91992C2.74688 7.79492 2.93438 12.1699 2.93438 14.1699C2.93438 16.2324 2.74688 20.6074 3.49688 22.4199C3.99688 23.6699 4.93438 24.6074 6.18438 25.1074C7.99688 25.8574 12.3719 25.6699 14.4344 25.6699C16.4344 25.6699 20.8094 25.8574 22.6844 25.1074C23.8719 24.6074 24.8719 23.6699 25.3094 22.4199Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.6844 0.169922C27.3094 0.169922 28.6844 1.54492 28.6844 3.16992V25.1699C28.6844 26.8574 27.3094 28.1699 25.6844 28.1699H17.0594V18.6699H20.6844L21.3719 14.1699H17.0594V11.2949C17.0594 10.0449 17.6844 8.85742 19.6219 8.85742H21.5594V5.04492C21.5594 5.04492 19.8094 4.73242 18.0594 4.73242C14.5594 4.73242 12.2469 6.91992 12.2469 10.7949V14.1699H8.30938V18.6699H12.2469V28.1699H3.68438C1.99688 28.1699 0.684376 26.8574 0.684376 25.1699V3.16992C0.684376 1.54492 1.99688 0.169922 3.68438 0.169922H25.6844Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.6844 4.29492C27.3094 6.91992 28.9344 10.3574 28.9344 14.1074C28.9344 21.7324 22.5594 27.9824 14.8719 27.9824C12.5594 27.9824 10.3094 27.3574 8.24688 26.2949L0.934376 28.1699L2.87188 20.9824C1.68438 18.9199 0.996876 16.5449 0.996876 14.0449C0.996876 6.41992 7.24688 0.169922 14.8719 0.169922C18.6219 0.169922 22.1219 1.66992 24.6844 4.29492ZM14.8719 25.6074C21.2469 25.6074 26.5594 20.4199 26.5594 14.1074C26.5594 10.9824 25.2469 8.10742 23.0594 5.91992C20.8719 3.73242 17.9969 2.54492 14.9344 2.54492C8.55938 2.54492 3.37188 7.73242 3.37188 14.0449C3.37188 16.2324 3.99688 18.3574 5.12188 20.2324L5.43438 20.6699L4.24688 24.9199L8.62188 23.7324L8.99688 23.9824C10.8094 25.0449 12.8094 25.6074 14.8719 25.6074ZM21.2469 16.9824C21.5594 17.1699 21.8094 17.2324 21.8719 17.4199C21.9969 17.5449 21.9969 18.2324 21.6844 19.0449C21.3719 19.8574 19.9969 20.6074 19.3719 20.6699C18.2469 20.8574 17.3719 20.7949 15.1844 19.7949C11.6844 18.2949 9.43438 14.7949 9.24688 14.6074C9.05938 14.3574 7.87188 12.7324 7.87188 10.9824C7.87188 9.29492 8.74688 8.48242 9.05938 8.10742C9.37188 7.73242 9.74688 7.66992 9.99688 7.66992C10.1844 7.66992 10.4344 7.66992 10.6219 7.66992C10.8719 7.66992 11.1219 7.60742 11.4344 8.29492C11.6844 8.98242 12.4344 10.6699 12.4969 10.8574C12.5594 11.0449 12.6219 11.2324 12.4969 11.4824C11.8719 12.7949 11.1219 12.7324 11.4969 13.3574C12.8719 15.6699 14.1844 16.4824 16.2469 17.4824C16.5594 17.6699 16.7469 17.6074 16.9969 17.4199C17.1844 17.1699 17.8719 16.3574 18.0594 16.0449C18.3094 15.6699 18.5594 15.7324 18.8719 15.8574C19.1844 15.9824 20.8719 16.7949 21.2469 16.9824Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="30"
                  height="33"
                  viewBox="0 0 30 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.6344 6.66992V13.5449H21.1969V6.66992H23.6344ZM17.0094 6.60742V13.4824H14.5719V6.60742H17.0094ZM6.69687 0.169922H29.6344V16.1699L18.7594 26.4824H13.9469L7.94687 32.1699V26.4824H0.696875V5.91992L6.69687 0.169922ZM27.2594 15.0449V2.48242H7.94687V19.6074H13.3844V23.6074L17.5719 19.6074H22.3844L27.2594 15.0449Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="29"
                  height="33"
                  viewBox="0 0 29 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.4344 13.2949H28.3719C25.4969 13.2949 22.8719 12.4199 20.7469 10.8574V22.0449C20.7469 27.6699 16.1844 32.1699 10.5594 32.1699C4.93438 32.1699 0.434376 27.6699 0.434376 22.0449C0.434376 16.4199 4.93438 11.8574 10.5594 11.8574C11.0594 11.8574 11.4969 11.9199 11.9969 11.9824V17.6074C11.4969 17.4199 11.0594 17.3574 10.5594 17.3574C7.99688 17.3574 5.87188 19.4824 5.87188 22.0449C5.87188 24.6074 7.99688 26.7324 10.5594 26.7324C13.1219 26.7324 15.2469 24.6074 15.2469 22.0449V0.169922H20.7469C20.7469 0.232422 20.7469 0.232422 20.7469 0.294922C20.7469 0.732422 20.7469 1.16992 20.8719 1.60742C21.2469 3.66992 22.4969 5.48242 24.2469 6.60742C25.4344 7.41992 26.8719 7.85742 28.3719 7.85742C28.3719 7.85742 28.3719 7.85742 28.4344 7.85742V13.2949Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="39"
                  height="29"
                  viewBox="0 0 39 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.4344 2.54492C36.5594 8.66992 38.6219 15.5449 37.8719 23.4824C37.8719 23.4824 37.8719 23.5449 37.8094 23.5449C35.0594 25.6074 31.9344 27.1699 28.6219 28.1699C28.5594 28.1699 28.4969 28.1699 28.4969 28.1699C27.8094 27.1699 27.1844 26.1699 26.6219 25.1074V25.0449C26.6219 24.9824 26.6219 24.9824 26.6844 24.9199C27.6844 24.5449 28.6219 24.1074 29.5594 23.5449C29.6219 23.5449 29.6219 23.5449 29.6219 23.4824C29.6219 23.4199 29.6219 23.4199 29.5594 23.3574C29.3719 23.2324 29.1844 23.1074 28.9969 22.9199H28.9344H28.8719C22.9344 25.6699 16.4344 25.6699 10.4344 22.9199C10.3719 22.9199 10.3719 22.9199 10.3719 22.9199C10.3094 22.9199 10.3094 22.9199 10.3094 22.9199C10.1219 23.1074 9.93438 23.2324 9.74688 23.3574C9.68438 23.4199 9.68438 23.4199 9.68438 23.4824C9.68438 23.5449 9.68438 23.5449 9.74688 23.5449C10.6219 24.1074 11.6219 24.5449 12.6219 24.9199C12.6219 24.9824 12.6844 24.9824 12.6844 25.0449V25.1074C12.1219 26.1699 11.4969 27.1699 10.8094 28.1699C10.7469 28.1699 10.7469 28.1699 10.6844 28.1699C7.30938 27.1699 4.18438 25.6074 1.49688 23.5449C1.43438 23.5449 1.43438 23.4824 1.43438 23.4824C0.809376 16.6074 2.12188 9.66992 6.87188 2.54492C6.87188 2.54492 6.87188 2.54492 6.93438 2.54492C9.24688 1.48242 11.8094 0.669922 14.3719 0.232422C14.3719 0.232422 14.3719 0.232422 14.4344 0.232422H14.4969C14.8719 0.857422 15.1844 1.54492 15.4344 2.16992C16.8094 1.98242 18.1844 1.85742 19.6219 1.85742C21.0594 1.85742 22.4969 1.98242 23.8719 2.16992C24.1219 1.54492 24.4344 0.857422 24.8094 0.232422L24.8719 0.169922C24.8719 0.169922 24.8719 0.232422 24.9344 0.232422C27.4969 0.669922 30.0594 1.48242 32.3719 2.54492C32.4344 2.54492 32.4344 2.54492 32.4344 2.54492ZM13.5594 19.2949C15.3719 19.2949 16.8719 17.6074 16.8719 15.6074C16.8719 13.5449 15.4344 11.9199 13.5594 11.9199C11.7469 11.9199 10.2469 13.5449 10.2469 15.6074C10.2469 17.6074 11.7469 19.2949 13.5594 19.2949ZM25.7469 19.2949C27.6219 19.2949 29.0594 17.6074 29.0594 15.6074C29.1219 13.5449 27.6219 11.9199 25.7469 11.9199C23.9344 11.9199 22.4969 13.5449 22.4969 15.6074C22.4969 17.6074 23.9344 19.2949 25.7469 19.2949Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="35"
                  height="25"
                  viewBox="0 0 35 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.2172 3.98242C34.9672 6.60742 34.9672 12.2324 34.9672 12.2324C34.9672 12.2324 34.9672 17.7949 34.2172 20.4824C33.8422 21.9824 32.6547 23.1074 31.2172 23.4824C28.5297 24.1699 17.9047 24.1699 17.9047 24.1699C17.9047 24.1699 7.21719 24.1699 4.52969 23.4824C3.09219 23.1074 1.90469 21.9824 1.52969 20.4824C0.779688 17.7949 0.779688 12.2324 0.779688 12.2324C0.779688 12.2324 0.779688 6.60742 1.52969 3.98242C1.90469 2.48242 3.09219 1.29492 4.52969 0.919922C7.21719 0.169922 17.9047 0.169922 17.9047 0.169922C17.9047 0.169922 28.5297 0.169922 31.2172 0.919922C32.6547 1.29492 33.8422 2.48242 34.2172 3.98242ZM14.4047 17.2949L23.2797 12.2324L14.4047 7.16992V17.2949Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full flex sm:flex-row flex-col sm:justify-between sm:items-start items-center sm:pt-16">
            <div>
              <h1 className="uppercase text-lg sm:text-start text-center tracking-widest text-[#999999] sm:pt-0 pt-10">
                KONTAKT
              </h1>
              <a href="" className="flex gap-1 items-center pt-1">
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2998 0.169922C16.1123 0.169922 16.7998 0.857422 16.7998 1.66992V10.6699C16.7998 11.5137 16.1123 12.1699 15.2998 12.1699H2.2998C1.45605 12.1699 0.799805 11.5137 0.799805 10.6699V1.66992C0.799805 0.857422 1.45605 0.169922 2.2998 0.169922H15.2998ZM15.2998 1.66992H2.2998V2.95117C2.9873 3.54492 4.1123 4.41992 6.4873 6.29492C7.01855 6.70117 8.0498 7.70117 8.7998 7.66992C9.51855 7.70117 10.5498 6.70117 11.0811 6.29492C13.4561 4.41992 14.5811 3.54492 15.2998 2.95117V1.66992ZM2.2998 10.6699H15.2998V4.88867C14.5811 5.45117 13.5498 6.26367 12.0186 7.48242C11.2998 8.01367 10.1123 9.20117 8.7998 9.16992C7.45605 9.20117 6.2373 8.01367 5.5498 7.48242C4.01855 6.26367 2.9873 5.45117 2.2998 4.88867V10.6699Z"
                    fill="white"
                  />
                </svg>
                <span className="sm:text-start text-center">
                  {" "}
                  buchung@nextlevel-erlebnisse.de
                </span>
              </a>
              <div className="flex sm:justify-start justify-center">
                <a href="" className="flex gap-1 items-center pt-1">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2998 0.969727C14.1123 0.969727 14.7998 1.65723 14.7998 2.46973V13.4697C14.7998 14.3135 14.1123 14.9697 13.2998 14.9697H2.2998C1.45605 14.9697 0.799805 14.3135 0.799805 13.4697V2.46973C0.799805 1.65723 1.45605 0.969727 2.2998 0.969727H13.2998ZM3.7373 12.9697C8.7373 12.9697 12.7998 8.93848 12.7998 3.90723C12.7998 3.68848 12.6436 3.50098 12.4248 3.46973L10.3936 3.00098C10.3623 3.00098 10.3311 2.96973 10.2998 2.96973C10.0811 2.96973 9.9248 3.09473 9.8623 3.28223L8.9248 5.46973C8.89355 5.50098 8.8623 5.56348 8.8623 5.62598C8.8623 5.78223 8.95605 5.90723 9.0498 6.00098L10.2373 6.96973C9.51855 8.46973 8.2998 9.71973 6.76855 10.4385L5.7998 9.25098C5.70605 9.15723 5.58105 9.09473 5.4248 9.09473C5.3623 9.09473 5.2998 9.09473 5.26855 9.12598L3.08105 10.0635C2.89355 10.126 2.7998 10.2822 2.7998 10.4697C2.7998 10.5322 2.7998 10.5635 2.7998 10.5947L3.26855 12.626C3.2998 12.8447 3.4873 12.9697 3.7373 12.9697Z"
                      fill="white"
                    />
                  </svg>
                  <span> 06631 7882663</span>
                </a>
              </div>
              <div className="flex sm:justify-start justify-center">
              <a href="" className="flex gap-1 items-center pt-1">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6748 2.83203C13.9873 4.14453 14.7998 5.86328 14.7998 7.73828C14.7998 11.5508 11.6123 14.6758 7.76855 14.6758C6.6123 14.6758 5.4873 14.3633 4.45605 13.832L0.799805 14.7695L1.76855 11.1758C1.1748 10.1445 0.831055 8.95703 0.831055 7.70703C0.831055 3.89453 3.95605 0.769531 7.76855 0.769531C9.64355 0.769531 11.3936 1.51953 12.6748 2.83203ZM7.76855 13.4883C10.9561 13.4883 13.6123 10.8945 13.6123 7.73828C13.6123 6.17578 12.9561 4.73828 11.8623 3.64453C10.7686 2.55078 9.33105 1.95703 7.7998 1.95703C4.6123 1.95703 2.01855 4.55078 2.01855 7.70703C2.01855 8.80078 2.33105 9.86328 2.89355 10.8008L3.0498 11.0195L2.45605 13.1445L4.64355 12.5508L4.83105 12.6758C5.7373 13.207 6.7373 13.4883 7.76855 13.4883ZM10.9561 9.17578C11.1123 9.26953 11.2373 9.30078 11.2686 9.39453C11.3311 9.45703 11.3311 9.80078 11.1748 10.207C11.0186 10.6133 10.3311 10.9883 10.0186 11.0195C9.45605 11.1133 9.01855 11.082 7.9248 10.582C6.1748 9.83203 5.0498 8.08203 4.95605 7.98828C4.8623 7.86328 4.26855 7.05078 4.26855 6.17578C4.26855 5.33203 4.70605 4.92578 4.8623 4.73828C5.01855 4.55078 5.20605 4.51953 5.33105 4.51953C5.4248 4.51953 5.5498 4.51953 5.64355 4.51953C5.76855 4.51953 5.89355 4.48828 6.0498 4.83203C6.1748 5.17578 6.5498 6.01953 6.58105 6.11328C6.6123 6.20703 6.64355 6.30078 6.58105 6.42578C6.26855 7.08203 5.89355 7.05078 6.08105 7.36328C6.76855 8.51953 7.4248 8.92578 8.45605 9.42578C8.6123 9.51953 8.70605 9.48828 8.83105 9.39453C8.9248 9.26953 9.26855 8.86328 9.3623 8.70703C9.4873 8.51953 9.6123 8.55078 9.76855 8.61328C9.9248 8.67578 10.7686 9.08203 10.9561 9.17578Z"
                    fill="white"
                  />
                </svg>
                <span> 06631 7882663</span>
              </a>
              </div>
              <div className="pt-3">
                <Link
                  href="/imprint"
                  className="block text-[15px] sm:text-left text-center font-bold pt-1"
                >
                  Impressum
                </Link>
                <a
                  href=""
                  className="block text-[15px] sm:text-left text-center font-bold pt-1"
                >
                  Datenschutzerklärung
                </a>
              </div>
            </div>
            <div>
              <h1 className="uppercase text-lg tracking-widest text-[#999999] sm:pt-0 pt-10">
                Next Level Erlebnisse
              </h1>
              <a
                href=""
                className="block text-[15px] text-center font-bold pt-1"
              >
                Sandbox VR
              </a>
            </div>
            <div>
              <h1 className="uppercase text-lg tracking-widest text-[#999999] sm:pt-0 pt-10">
                Eventangebote
              </h1>
              <a
                href=""
                className="block text-[15px] sm:text-right text-center font-bold pt-1"
              >
                Firmenevents
              </a>
              <a href="" className="block text-[15px] sm:text-right text-center font-bold">
                Kindergeburtstage
              </a>
              <a href="" className="block text-[15px] sm:text-right text-center font-bold">
                Teamevents
              </a>
              <a href="" className="block text-[15px] sm:text-right text-center font-bold">
                Junggesellenabschiede
              </a>
              <a href="" className="block text-[15px] sm:text-right text-center font-bold">
                Weihnachtsfeiern
              </a>
              <a href="" className="block text-[15px] sm:text-right text-center font-bold">
                Seminare
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center sm:pt-44 pt-36 pb-20">
            <div className="flex items-center">
              <a
                href="http://ec.europa.eu/agriculture/index_de.htm"
                target="_blank"
                className="block"
              >
                <Image
                  className=""
                  src="/logos.png"
                  alt="Sponsor"
                  width={364}
                  height={88.8}
                  priority
                />
              </a>
              <a
                href="http://www.eler.hessen.de/"
                target="_blank"
                className="block -ml-1"
              >
                <Image
                  className=""
                  src="/logos2.png"
                  alt="Sponsor"
                  width={328.5}
                  height={88.8}
                  priority
                />
              </a>
              <a
                href="https://lasertag-alsfeld.de/das-spiel/"
                target="_blank"
                className="block -ml-1"
              >
                <Image
                  className="mt-[1px]"
                  src="/logos3.jpeg"
                  alt="Sponsor"
                  width={195.3}
                  height={88.8}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
