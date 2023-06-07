import { TitleProps } from "../../interface/NavbarProps"

export const PageTitle: React.FC<TitleProps> = (props) => {

    const {pageTitle} = props;

    return(
        <div className="title-container">
            <h2 className="title-main">{pageTitle}</h2>
        </div>
    )
}