import ItemListContainer from "./ItemListContainer";

const Main = () => {
    return(
        <main className="flex flex-col justify-center items-center flex-grow bg-sjy-100 w-4/5 mt-12">
            <ItemListContainer greeting="Main Page"/>
        </main>
    );
};

export default Main;