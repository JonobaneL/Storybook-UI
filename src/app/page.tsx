import ButtonsBar from '@/components/ButtonsBar';
import Input from '@/components/Input';
import Sidebar from '@/components/SidebarMenu';

export default function Home() {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <div className="w-[30rem] space-y-4 rounded-2xl p-4 shadow-xl">
        <h1 className="text-primary text-center text-2xl font-medium">
          Storybook UI
        </h1>
        <Input placeholder="Username" name="username" clearable showArrows />
        <Input
          placeholder="Age"
          name="age"
          type="number"
          clearable
          showArrows
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          clearable
        />
        <Input placeholder="Password" type="password" name="password" />
        <ButtonsBar />
        <Sidebar />
      </div>
    </div>
  );
}
