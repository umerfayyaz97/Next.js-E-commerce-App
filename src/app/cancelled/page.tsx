import Link from "next/link";
import { FaBan } from "react-icons/fa"; // You can use the cancel icon of your choice
import { Button } from "@/components/ui/button";

const CancelOrder = () => {
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="text-xl icon">
          <FaBan size={40} className="h-30 w-30" />{" "}
          {/* Use your preferred cancel icon */}
        </p>
        <h2>Order Canceled</h2>
        <p className="email-msg">
          If you have any questions, please contact our support.
        </p>
        <p className="description">
          For assistance, please email
          <a className="text-red-500 email" href="mailto:support@example.com">
            {" "}
            support@example.com
          </a>
        </p>
        <Link href="/products">
          <Button type="button" className="mt-4 hbtn">
            Continue Shopping
          </Button>
        </Link>
        {/* You might not need the "See your order" button for a canceled order */}
      </div>
    </div>
  );
};

export default CancelOrder;
