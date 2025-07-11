function Header() {
  return (
    <header className="header-container w-full flex items-center justify-between py-4 border-b-2 border-gray-300 bg-[#121212]">
      <h2 className="text-2xl font-bold text-gray-200">OZ코딩스쿨</h2>
      <ul className="menu-container flex gap-4 text-sm font-semibold">
        <li>
          <a href="#">로그인</a>
        </li>
        <li>
          <a href="#">회원가입</a>
        </li>
        <li>
          <a href="#">내클래스</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
