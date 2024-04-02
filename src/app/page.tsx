import ChatSection from "@/Sections/ChatSection/ChatSection";
import ProfileSection from "@/Sections/ProfileSection/ProfileSection";
import UsersSection from "@/Sections/UsersSection/UsersSection";

export default function Home({className}:{
  className:string
}) {
  return (
    <div className="h-[100vh] bg-slate-200 flex flex-row">
      <ProfileSection className="w-1/4 bg-purple-700"/>
      <UsersSection className="w-1/4 bg-white"/>
      <ChatSection className="w-2/4"/>
    </div>
  );
}
