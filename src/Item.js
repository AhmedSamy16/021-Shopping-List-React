import { AiFillCheckCircle } from "react-icons/ai"
import { BiCircle } from "react-icons/bi"
import { CgChevronRightO, CgChevronLeftO } from "react-icons/cg"


const Item = ({ name, quantity, isSelected, index, checkItem, increment, decrement }) => {
    return (
        <div className='item-container'>
        <div className='item-name'>
            {isSelected ? (
                <>
                    <AiFillCheckCircle onClick={() => checkItem(index)} />
                    <span className='completed'>{name}</span>
                </>
            ) : (
                <>
                    <BiCircle onClick={() => checkItem(index)} />
                    <span>{name}</span>
                </>
            )}
        </div>
        <div className='quantity'>
            <button>
                <CgChevronLeftO onClick={() => decrement(index)} />
            </button>
            <span> {quantity} </span>
            <button>
                <CgChevronRightO onClick={() => increment(index)} />
            </button>
        </div>
    </div>
    )
}

export default Item