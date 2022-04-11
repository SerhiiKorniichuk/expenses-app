import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { CategoryAnother, ICategory } from 'models/ICategory';
import React from 'react';
import {
    changeActualCategory,
    changeCategoryForTransactions,
    deleteCategory,
} from 'store/reducers/ActionCreators';
import { authSelector } from 'store/reducers/AuthSlice';
import { categorySelector } from '../store/reducers/CategorySlice';

interface ListCategoriesProps {
    isDeleteCategory: boolean;
}

const ListCategories: React.FC<ListCategoriesProps> = ({
    isDeleteCategory,
}) => {
    const dispatch = useAppDispatch();
    const { idUser } = useAppSelector(authSelector);
    const { categories, actualCategory } = useAppSelector(categorySelector);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        nextView: number
    ) => {
        let idActualCategory = nextView;
        if (!idActualCategory) idActualCategory = CategoryAnother.id;
        dispatch(changeActualCategory(idActualCategory));
    };

    const clickDeleteCategory = (idCategory: number, idUser: number | null) => {
        if (idUser) {
            dispatch(deleteCategory({ idUser, idCategory }));
            dispatch(changeCategoryForTransactions({ idUser, idCategory }));
        }
    };

    return (
        <div>
            <ToggleButtonGroup
                orientation="vertical"
                value={actualCategory}
                exclusive
                onChange={handleChange}
            >
                {categories.map((category: ICategory) => (
                    <ToggleButton key={category.id} value={category.id}>
                        {category.label}
                        {isDeleteCategory && (
                            <DeleteIcon
                                onClick={() =>
                                    clickDeleteCategory(category.id, idUser)
                                }
                            />
                        )}
                    </ToggleButton>
                ))}
                <ToggleButton value={CategoryAnother.id}>
                    {CategoryAnother.label}
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default ListCategories;
