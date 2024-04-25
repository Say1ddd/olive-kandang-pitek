const ListComponent = ({ members }) => {
  return (
      <div className="bg-black/25 p-5 rounded">
      <div className="font-bold">Group Members</div>
          <ol>
              {members.map((member, index) => (
                  <li key={index} className="flex items-center my-2 rounded p-2 mx-4 bg-black/25 border-l-8 border-transparent hover:border-white duration-300 pl-2">
                      <div className="text-lg">{member.name}</div>
                      <span className={`border p-1 rounded-full text-xs ml-2 border-sky-400 text-sky-200 ${member.as ? member.as : 'border-red-500 text-red-500'}`}>
                          {member.as ? member.as : "Beban"}
                      </span>
                  </li>
              ))}
          </ol>
      </div>
  );
};

export default ListComponent;
