export default function ClientV1() {
  return (
    <div className="md:px-20 px-10 mt-20">
      <div className="py-4 border-b border-slate-300">
        <h1 className="text-slate-600 text-sm">OUR CLIENTS & PARTNERS</h1>
      </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-10 mt-10 pb-32">
            <div>
              <h1 className="font-semibold text-2xl text-slate-700">Our Valued Clients</h1>
              <ul className="list-disc list-inside font-light mt-5 text-slate-500 flex flex-col gap-2">
                <li>Ministry of Health, Uganda</li>
                <li>Ministry of Education and Sports, Uganda</li>
                <li>
                  Ministry of Agriculture, Animal Industry and Fisheries, Uganda
                </li>
                <li>Ministry of Trade, Industry and Cooperatives, Uganda</li>
                <li>Wakiso District Local Government, Uganda</li>
                <li>County Government of Murang’a, Kenya</li>
                <li>County Government of Kirinyaga, Kenya</li>
                <li>MasterCard Foundation</li>
                <li>Bill and Melinda Gates Foundation</li>
                <li>International Development Research Center (IDRC)</li>
                <li>NHH-Norwegian School of Economics</li>
                <li>University of Southern California</li>
                <li>
                  Private Enterprise Development in Low Income Countries (PEDL)
                </li>
                <li>Murang’a Water and Sewerage Company (Muwasco)</li>
                <li>Nairobi City Water and Sewerage Company</li>
              </ul>
            </div>


            <div>
              <h1 className="font-semibold text-2xl text-slate-700">Our Partner Organizations</h1>
              <ul className="list-disc list-inside font-light mt-5 text-slate-500 flex flex-col gap-2">
                <li>International Growth Center</li>
                <li>STOP TB Partnership</li>
                <li>The World Bank</li>
                <li>Ministry of Trade, Industry and Cooperatives, Uganda</li>
                <li>East Africa Market Development Associates ( EAMDA)</li>
                <li>Partnership for Economic Policy (PEP)</li>
                <li>NHH-Norwegian School of Economics</li>
                <li>University of Sydney</li>
                <li>University of Texas (Somalia)</li>
                <li>Makerere University, Uganda</li>
                <li>University of Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
      </div>
  );
}
