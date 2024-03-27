const goods = document.getElementById("goods")
const yourMoney = document.getElementById("yourMoney")
const select = document.getElementById("select")
const amount = document.getElementById("amount")
const moneys = document.getElementById("money")
const button = document.getElementById("button")

let casa = 0
let userMoney

function reducer(state, { type, what, HowMany, money}) {
    if (!state) {
        return {
            bear: {quantity: 100, cost: 6},
            chips: {quantity: 100, cost: 4},
            cola: {quantity: 100, cost: 3},
            salad: {quantity: 100, cost: 8}
        }
    }

    if (type === "buy") {
        const totalCost = HowMany * state[what].cost
        if(state[what].quantity - HowMany >= 0 && state[what].cost <= money && totalCost <= money && userMoney - totalCost >= 0){
            casa += totalCost
            userMoney -= totalCost
            return {
                    ...state,
                    [what]: {
                            quantity: state[what].quantity - HowMany,
                            cost: state[what].cost
                        }
                }
            }
        }
    return state;
}

function createStore(reducer) {
    let store = reducer(undefined, {})
    const cbs = [];

    const getState = () => store
    const subscribe = cb => {
        cbs.push(cb)
        return () => {
            cbs = cbs.filter(c => c !== cb)
        };
    };

    const dispatch = action => {
        const newStore = reducer(store, action)
        if (newStore !== store) {
            store = newStore
            document.title = `Casa: ${casa}`
            yourMoney.value = userMoney
            for (let cb of cbs) cb()
        }
    };

    return {
        getState,
        dispatch,
        subscribe
    };
}

let store = createStore(reducer)

function update(){
    goods.innerText = ""
    for(let item in store.getState()){
        const {quantity, cost} = store.getState()[item]
        const div = document.createElement("div")
        div.innerText = `${item}: quantity - ${quantity}, cost - ${cost}`
        goods.append(div)
    }
}
store.subscribe(update)

for(let item in store.getState()){
    const option = document.createElement("option")
    option.value = item
    option.innerText = item
    select.append(option)
}

button.addEventListener("click", function(){
    store.dispatch({type: "buy", what: select.value, HowMany: amount.value, money: moneys.value})
    yourMoney.disabled = true
    userMoney = yourMoney.value || 100
})
update()