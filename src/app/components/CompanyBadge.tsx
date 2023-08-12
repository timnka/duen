interface Company {
    name: string,
    source: string,
}

const CompanyBadge:React.FC<Company> = ({ name, source }) => {
    return (
        
        <div className="h-36 max-w-sm rounded-lg bg-white shadow-[rgba(108,_66,_245,_0.1)_0px_9px_30px] hover:scale-105 transition ease-out">
            <img src={source} className="h-full w-auto px-8 py-8 object-contain"></img>
        </div>
    )
}

export default CompanyBadge