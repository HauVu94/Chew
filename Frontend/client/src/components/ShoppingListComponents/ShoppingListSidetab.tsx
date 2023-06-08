import {Link} from "react-router-dom";
import * as BiIcons from 'react-icons/bi';

export const ShoppingListSidetab = () => {

    return (
        <>
            <div className="tab-wrapper">
                <div className="sidetab sidetab-left">
                    <Link to="/RecipePage">
                        <BiIcons.BiRestaurant/>
                    </Link>
                </div>

                <div className="sidetab sidetab-right">
                    <Link to="/MyFridge">
                        <BiIcons.BiFridge/>
                    </Link>
                </div>
            </div>
        </>
    )
}