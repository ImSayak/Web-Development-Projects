import Card from './card'
function Tours({tours, removeTour}) {
    return (
        <div className="flex justify-center items-center flex-col">
            <div>
                <h2 className=" border-dashed text-[3rem] m-[6vh] border-[7px]
                 border-deepBlue rounded-[20px] py-[1vh] px-[5vw] font-bold">
                  Plan With Sayak</h2>
            </div>
            <div className="flex justify-center flex-wrap max-w-[1300px] my-0 mx-auto">
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;