import spinner from "../layout/assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img src={spinner} className="text-center mx-auto" alt="loading ..." />
    </div>
  );
}

export default Spinner;
