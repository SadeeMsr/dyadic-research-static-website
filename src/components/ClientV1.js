const valuedClients = [
  "Ministry of Health, Uganda",
  "Ministry of Education and Sports, Uganda",
  "Ministry of Agriculture, Animal Industry and Fisheries, Uganda",
  "Ministry of Trade, Industry and Cooperatives, Uganda",
  "Wakiso District Local Government, Uganda",
  "County Government of Murang’a, Kenya",
  "County Government of Kirinyaga, Kenya",
  "MasterCard Foundation",
  "Bill and Melinda Gates Foundation",
  "International Development Research Center (IDRC)",
  "NHH-Norwegian School of Economics",
  "University of Southern California",
  "Private Enterprise Development in Low Income Countries (PEDL)",
  "Murang’a Water and Sewerage Company (Muwasco)",
  "Nairobi City Water and Sewerage Company",
];

const partnerOrganizations = [
  "International Growth Center",
  "STOP TB Partnership",
  "The World Bank",
  "Ministry of Trade, Industry and Cooperatives, Uganda",
  "East Africa Market Development Associates ( EAMDA)",
  "Partnership for Economic Policy (PEP)",
  "NHH-Norwegian School of Economics",
  "University of Sydney",
  "University of Texas (Somalia)",
  "Makerere University, Uganda",
  "University of Nairobi, Kenya",
];

export default function ClientV1() {
  return (
    <div className="md:px-20 px-10 mt-20 md:mt-28">
      <div className="py-4 border-b border-slate-300">
        <h1 className="text-slate-600 text-sm">OUR CLIENTS & PARTNERS</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-10 mt-10 pb-32">
        <div>
          <h1 className="font-semibold text-2xl text-slate-700">
            Our Valued Clients
          </h1>
          <ul className="list-disc list-inside font-light mt-5 text-slate-500 flex flex-col gap-2">
            {valuedClients.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-2xl text-slate-700">
            Our Partner Organizations
          </h1>
          <ul className="list-disc list-inside font-light mt-5 text-slate-500 flex flex-col gap-2">
            {partnerOrganizations.map((partner, index) => (
              <li key={index}>{partner}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
