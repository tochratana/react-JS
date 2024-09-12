export const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="border-2 border-[#ccc] p-5 m-2.5 rounded-md w-64 inline-flex shadow-sm">
      <div className="h-[250px]">
        <img src={user.image} alt={user.title} className=" w-40 h-40 m-auto" />
        <h3 className="text-black line-clamp-3">{user.title}</h3>
      </div>
    </div>
  );
};
