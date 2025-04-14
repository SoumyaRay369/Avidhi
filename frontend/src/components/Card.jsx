export const Card = ({imageUrl, heading, summaryText}) => {
    return (
        <>
            <div className="p-2 rounded-md flex flex-col flex-shrink-0 gap-y-2 bg-slate-500 w-60 h-60 sm:w-80 sm:h-80">
                <img src={imageUrl} alt="Title Image" className="object-cover h-3/4 rounded-md"/>
                <h2 className="font-oswald text-sm sm:text-xl text-center">{heading}</h2>
                <p className="text-ellipsis text-xs sm:text-lg font-playfair">{summaryText}</p>
            </div>
        </>
    )
}