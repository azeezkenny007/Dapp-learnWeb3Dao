export const ContractAddress = "0xBB3195394f1958b78271Bd6185859AB7E3393a35"

export const Abi = [
    {
        inputs: [],
        name: "getMood",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_mood",
                type: "string",
            },
        ],
        name: "setMood",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]