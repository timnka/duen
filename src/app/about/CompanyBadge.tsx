import Image from 'next/image'

interface Company {
    name: string,
    path: string,
}

const CompanyBadge:React.FC<Company> = ({ name, path }) => {
    return (
        
        <div className="h-36 max-w-sm bg-white hover:scale-105 transition ease-out">
            <Image src={path} width={300} height={300} className="h-full w-auto px-8 py-8 object-contain" alt={name}></Image>
        </div>
    )
}

export default CompanyBadge