// create an interface (type object) that can be used throughout the application
export interface Transaction {
    transactionId: number,
    stockSymbol: string,
    companyName: string,
    currentStockPrice: string,
    numberStockShares: number
    transactionTotalValue: number
    transactionType: string,
    transactionTime: string,
    investorId: number,
    stockId:number
};