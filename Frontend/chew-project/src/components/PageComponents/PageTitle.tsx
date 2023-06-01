import { TitleProps } from "../../interface/NavbarProps"

export const PageTitle: React.FC<TitleProps> = (props) => {

    const {pageTitle} = props;

    return(
        <div className="title-container">
            <h2 className="page-title">{pageTitle}</h2>
        </div>
    )
}