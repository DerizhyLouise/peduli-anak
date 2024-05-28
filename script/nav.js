const showNavbar = () => {
  const body = document.getElementsByTagName("body")[0];
  const navbar = document.createElement("header");

  navbar.className =
    "w-full h-20 top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 fixed";

  navbar.innerHTML = `
        <div class="w=4/12 md:w-3/12">
            <a href="#">
                <img src="../assets/svg/logo_samping.svg" alt="logo" class="h-20 w-auto hover:text-green-500 duration-200 py-4 hidden xl:block">
                <img src="../assets/svg/logo_bawah.svg" alt="logo" class="h-20 w-auto hover:text-green-500 duration-200 py-4 block xl:hidden">
            </a>
        </div>

        <nav class="font-semibold text-lg hidden md:block">
            <ul class="flex items-center">
                <li id="beranda"
                    class="p-2 xl:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="./">Beranda</a>
                </li>
                <li id="kalkulator"
                    class="p-2 xl:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="">Kalkulator</a>
                </li>
                <li id="diskusi"
                    class="p-2 xl:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="">Diskusi</a>
                </li>
                <li id="edukasi"
                    class="p-2 xl:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="./education.html">Edukasi</a>
                </li>
                <li id="publikasi"
                    class="p-2 xl:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="">Publikasi</a>
                </li>
            </ul>
        </nav>

        <div class="w-8/12 md:w-3/12 flex justify-end gap-6">
            <nav class="md:hidden">
                <button id="dropdownDefaultButton" onclick="navbarClick()" data-dropdown-toggle="dropdown" data-dropdown-offset-distance="2" class="w-28 group text-white bg-black hover:bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200" type="button">
                    Menu
                    <i id="dropdownIcon" class="fa-solid fa-chevron-down ml-2 bg-black group-hover:bg-green-500 duration-200"></i>
                </button>
                <div id="dropdown" class="hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-28">
                    <ul class="py-2 text-sm text-white" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-green-500">Beranda</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-green-500">Kalkulator</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-green-500">Diskusi</a>
                        </li>
                        <li>
                            <a href="./education.html" class="block px-4 py-2 hover:bg-green-500">Edukasi</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-green-500">Publikasi</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <a href="./auth/login.html" class="text-2xl hover:text-green-500 duration-200">
                <i class="fa-solid fa-right-to-bracket"></i>
            </a>
            <a href="#" class="text-2xl hover:text-green-500 duration-200">
                <i class="fa-solid fa-gear"></i>
            </a>
            <a href="#" class="">
                <img class="w-8 h-8 rounded-full" src="../assets/img/avatar1.jpg" alt="Avatar">
            </a>
        </div>
    `;

  body.appendChild(navbar);
};

showNavbar();
