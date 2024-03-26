import { toast } from 'react-toastify';
const getSaveReadBooks = () => {
    const storedSaveBooks = localStorage.getItem('read-books');
    if (storedSaveBooks) {
        return JSON.parse(storedSaveBooks);
    }
    return [];
}

const saveReadBooks = (id) => {
    const saveReadBooksData = getSaveReadBooks();
    const saveWishListData = getWishList();
    
    const exists = saveReadBooksData.includes(id);
    
    if (!exists) {
        saveReadBooksData.push(id);
        localStorage.setItem('read-books', JSON.stringify(saveReadBooksData));
        toast.success('You have successfully marked as read list.');

        const index = saveWishListData.indexOf(id);
        if (index !== -1) {
            saveWishListData.splice(index, 1);
            localStorage.setItem('wishList', JSON.stringify(saveWishListData));
            toast.info('The book is removed from the wishlist.');
        }
    } else {
        toast.warning('The book has already marked as read list.');
    }
}



const getWishList = () => {
    const saveWishListData = localStorage.getItem('wishList');
    if (saveWishListData) {
        return JSON.parse(saveWishListData);
    }
    return [];
}

const saveWishList = (id) => {
    const saveReadBooksData = getSaveReadBooks();
    const saveWishListData = getWishList();

    const existsInReadBooks = saveReadBooksData.includes(id);

    if (existsInReadBooks) {
        toast.warning('The book is already added in read list.');
    }
    else {
        const existsInWishlist = saveWishListData.includes(id);
        if (!existsInWishlist) {
            saveWishListData.push(id);
            localStorage.setItem('wishList', JSON.stringify(saveWishListData));
            toast.success('You have successfully added to the wish list.');
        }
        else {
            toast.warning('The Book is already added in the wish list.');
        }
    }
}

export { saveReadBooks, getSaveReadBooks, getWishList, saveWishList }