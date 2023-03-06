const MarkTextAsLink = (
    {
        text,
        markText
    }
) => {
    let textSplit = text.split(markText);
    return(
        <div>
            {textSplit[0]}
            <a href={`https://${markText}`} className="text-decoration-none text-primary">{markText}</a>
            {textSplit[1]}
        </div>
    )
}

export default MarkTextAsLink;