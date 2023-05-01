const ListComponent = ({ members }) => {
    return (
        <div className="bg-black/25 p-5 rounded">
        <div className="font-bold text-center">Group Members</div>
            <ol>
                {members.map((member, index) => (
                    <li key={index} className="flex items-center my-2 rounded p-2 bg-black/25 justify-between md:justify-center md:mx-4 border-x-4 border-transparent hover:border-sky-300 hover:bg duration-300 pl-2">
                        <div className="text-sm md:text-md lg:text-lg">{member.name}</div>
                        <span className={`border p-1 rounded-full text-xs md:text-sm lg:text-md ml-1 lg:ml-3 border-sky-400 text-sky-200 ${member.as ? member.as : 'border-red-500 text-red-500'}`}>
                            {member.as ? member.as : "Beban"}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ListComponent;
