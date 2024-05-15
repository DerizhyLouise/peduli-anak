const showNavbar = () => {
  const body = document.getElementsByTagName("body")[0];
  const navbar = document.createElement("header");
  navbar.className =
    "header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02";

  navbar.innerHTML = `
        <div class="w-3/12">
            <a href="#">
                <img src="../assets/logo.png" alt="logo" class="h-20 w-auto hover:text-green-500 duration-200 py-4">
            </a>
        </div>

        <nav class="nav font-semibold text-lg">
            <ul class="flex items-center">
                <li
                    class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                    <a href="">Beranda</a>
                </li>
                <li
                    class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="">Kalkulator Stunting</a>
                </li>
                <li
                    class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="">Forum Diskusi</a>
                </li>
                <li
                    class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="">Edukasi</a>
                </li>
                <li
                    class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="">Publikasi</a>
                </li>
            </ul>
        </nav>

        <div class="w-3/12 flex justify-end gap-6">
            <a href="" class="text-2xl hover:text-green-500 duration-200">
                <i class="fa-solid fa-right-to-bracket"></i>
            </a>
            <a href="" class="text-2xl hover:text-green-500 duration-200">
                <i class="fa-solid fa-gear"></i>
            </a>
        </div>
    `;

  body.appendChild(navbar);
};

showNavbar();
