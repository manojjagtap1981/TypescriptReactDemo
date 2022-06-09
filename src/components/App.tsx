import * as React from "react";

interface IInvoiceListProps {
  invoiceData: InvoiceDataType;
  logo?: string;
}

type PaymentStatusType = "paid" | "pending" | "late";
type InvoiceDataType = { customerName: string; invoices: InvoiceType[] }
type InvoiceType = {id: number, name: string, total: string, paymentStatus: PaymentStatusType};

// function InvoiceList(){
// }

const InvoiceList = (props: IInvoiceListProps) => {
  const { customerName, invoices } = props.invoiceData;
  const itemStyleContainer = {
        display: "flex", fontSize:"20px"
      };
  return (
  <div>
    <h1>{customerName}</h1>
    <hr />
    <div>
      {invoices.map((invoice) => (
        <div key={invoice.id} 
          style={itemStyleContainer}>
          <div>{invoice.name} - </div>
          <div> {invoice.total} - </div>
          <div> {invoice.paymentStatus}</div>
        </div>
        )) }
    </div>
    {/* <h1>
      {invoices.map((id) => {id});}
    </h1> */}
  </div>
  );
};

const App = () => {
  const data: InvoiceDataType = {
    customerName: "Google",
    invoices: [
      {id: 23, name: "Dev Wrok", total: "20.00", paymentStatus:"paid"},
      {id: 456, name: "More Dev Wrok", total: "50.00", paymentStatus: "pending"},
      {id: 789, name: "Something different ", total: "100.00", paymentStatus: "late"},
    ]
  };

  return (
    <div>
      <InvoiceList invoiceData={data} />
    </div>
  );
};

export default App;
