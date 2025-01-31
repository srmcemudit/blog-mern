import { Avatar } from '@material-tailwind/react'
function BloggerDetail({ tags, createdAt, authorName, title, content }) {
    return (
        <main className="p-12 w-full bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-2 text-xs mb-6">
                <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" />
                <p className="flex flex-col items-start"><span className="text-sm">{authorName}</span><span>{createdAt.slice(0, 10)}</span></p>
            </div>
            <hr />
            <div className="flex flex-col gap-2 w-full">
                <h1 className="text-5xl mt-2 text-left">
                    <p className='p-2 font-black'>{title}</p>
                </h1>
                <p className="list-none flex gap-6 p-2 w-full font-semibold text-sm">
                    {tags.map((tag, index) => {
                        let code = Math.floor(Math.random() * 16777215).toString(16);
                        return <li key={index} ><span style={{ color: `#${code}` }}>#</span>{tag}</li>
                    })}
                </p>
                <p id='abc' dangerouslySetInnerHTML={{ __html: content }} className="text-left text-lg p-2">
                </p>
            </div>
        </main>
    )
}

export default BloggerDetail