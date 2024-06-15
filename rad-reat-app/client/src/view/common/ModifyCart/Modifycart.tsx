import { Component } from "react";
import { CartItem } from "../../../model/CartItem";

interface ModifyCartProps {
    data: any;
}

interface ModifyCartState {
    itemCount: number;
}

export class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {
    public static itemsList : CartItem[] = [];
    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }
    componentDidMount() {
        const {itemCount}
            = this.state;

        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList
                .find(item=>
                    item.product.id ===
                    this.props.data.product.id)) {
                ModifyCart.itemsList.push(
                    {
                        product: this.props.data.product,
                        itemCount: itemCount
                    }
                );
                console.log(ModifyCart.itemsList);
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any): void {
        let {itemCount} = this.state;
        let item = ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id);
        if (item) {
            let index =ModifyCart.itemsList.indexOf(item);

            ModifyCart.itemsList.splice(index, 1);

            ModifyCart.itemsList.push(
                {
                    product: this.props.data.product,
                    itemCount: itemCount
                }
            );
        }
    }

    render() {
        let { itemCount } = this.state;
        const increaseItemCount = () => {
            this.setState({
                itemCount: itemCount + 1
            })
        }

        const decreaseItemCount = () => {
            if(itemCount>1){
                this.setState({
                    itemCount: itemCount - 1
                })
            }
        }

        return (
            <div className="w-full mt-1 p-[2.40px] text-[8px] text-center">
                <button onClick={decreaseItemCount} className="float-left text-[8px] bg-yellow-300 rounded-lg h-3 w-3">-</button>
                <small>{itemCount}</small>
                <button onClick={increaseItemCount} className="float-right text-[8px] bg-yellow-300 rounded-lg h-3 w-3">+</button>
            </div>
        );
    };
}