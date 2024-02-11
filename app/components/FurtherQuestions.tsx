const FurtherQuestions = () => {
  return (
    <section className="sm:px-[150px] px-5 pt-[70px] pb-[55px] bg-black">
      <h1 className="uppercase sm:text-xl text-sm text-gray-1 leading-[26px] sm:tracking-[10px] tracking-[3px]">
        LASS VON DIR HÖREN
      </h1>
      <h2 className="uppercase text-white sm:text-[55px] text-4xl sm:leading-[72px] leading-snug font-bold pt-5 tracking-[10px]">
        Weitere Fragen?
      </h2>
      <p className="pt-5 text-[15px] left-5">
        Dann lass uns doch gerne in Kontakt treten! Wir freuen uns, dir
        Weiterhelfen zu können!
      </p>
      <div className="grid grid-cols-2 sm:pt-[70px] pt-[50px]">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="flex justify-center">
              <svg
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.6824 35.791C49.4637 36.1816 50.0496 37.0605 50.0496 38.0371C50.0496 38.1348 50.0496 38.3301 50.0496 38.5254L47.7059 48.6816C47.4129 49.7559 46.534 50.4395 45.4598 50.4395C20.3621 50.4395 0.147266 30.2246 0.147266 5.12695C0.147266 4.05273 0.83086 3.17383 1.90508 2.88086L12.0613 0.537109C12.2566 0.537109 12.452 0.439453 12.5496 0.439453C13.5262 0.439453 14.4051 1.02539 14.7957 1.9043L19.4832 12.8418C19.5809 13.1348 19.6785 13.4277 19.6785 13.7207C19.6785 14.502 19.2879 15.1855 18.7996 15.5762L12.8426 20.459C16.4559 28.0762 22.5105 34.1309 30.1277 37.7441L35.0105 31.7871C35.4012 31.2988 36.0848 30.9082 36.7684 30.9082C37.159 30.9082 37.452 31.0059 37.7449 31.1035L48.6824 35.791Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="block text-center tracking-[5px] uppercase leading-5 pt-6 text-white">
              TELEFON
            </span>
            <span className="block text-center text-gray-1 text-sm leading-5 pt-[11px]">
              +41 43 311 9906
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full">
            <div className="flex justify-center">
              <svg
                width="52"
                height="54"
                viewBox="0 0 52 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.0965 2.12305C47.4168 0.169922 51.616 3.00195 51.0301 6.9082L45.2684 44.7012C44.9754 46.166 44.1941 47.3379 42.9246 48.1191C42.1434 48.5098 41.3621 48.7051 40.5809 48.7051C39.9949 48.7051 39.409 48.6074 38.823 48.3145L27.8855 43.8223L23.5887 49.584C20.952 53.1973 15.1902 51.3418 15.1902 46.752V38.5488L3.95977 33.959C0.346485 32.4941 0.0535164 27.5137 3.47149 25.5605L44.0965 2.12305ZM19.8777 46.752L23.3934 41.9668L19.8777 40.502V46.752ZM40.5809 44.0176L46.4402 6.12695L5.81524 29.5645L16.2645 33.959L36.9676 15.9902C38.3348 14.7207 40.2879 16.4785 39.3113 18.041L25.5418 37.7676L40.5809 44.0176Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="block text-center tracking-[5px] uppercase leading-5 pt-6 text-white">
              E-MAIL
            </span>
            <span className="block text-center text-gray-1 text-sm leading-5 pt-[11px]">
              zurich@sandboxvr.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurtherQuestions;
