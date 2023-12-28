import { IconDeviceGamepad2, IconShoppingCart } from '@tabler/icons-react';

export default function Header() {
  return (
    <header>
      <nav className="flex items-center gap-4 p-4">
        <a href="#" className="mr-10 ">
          <IconDeviceGamepad2 className='size-8'/>
        </a>
        <input
          type="text"
          placeholder="The Witcher 3, GTA V, Mount & Blade, etc"
          className="w-full h-10 rounded-md pl-2"
        />
        <a href="#">About</a>
        <a href="#"><IconShoppingCart className='size-8' /></a>
      </nav>
    </header>
  );
}
