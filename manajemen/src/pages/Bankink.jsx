import NavigationTabs from "../components/NavigationTabs";
import UserStats from "../components/UserStats";

export default function Bankink() {
    return (
      <div>
        <div className="flex justify-between items-center ">
        <h3 className="text-green-600 font-bold text-xl">Hello, User Welcome Back</h3>
        <NavigationTabs />
      </div>

      <div className='flex justify-between items-center mt-3'>
      <h3 className="text-black font-bold text-xl ">Overview</h3>
      <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Widget</button>
      </div>
<div className="flex gap-4">
      <div className="flex flex-col gap-5">
    
    <a href="#" class="block w-60 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="bg-blue-600 p-3 rounded-t-lg">
            <h5 class="text-2xl font-bold tracking-tight text-white">Net Revenue</h5>
        </div>
        <h5 class="mt-4 text-2xl font-bold tracking-tight text-green-500">$54000</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">January 2025</p>
    </a>

    
    <a href="#" class="block w-60 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="bg-green-600 p-3 rounded-t-lg">
            <h5 class="text-2xl font-bold tracking-tight text-white">Weekly Sales</h5>
        </div>
        <h5 class="mt-4 text-2xl font-bold tracking-tight text-blue-500">$54000</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">January 2025</p>
    </a>

    
    <a href="#" class="block w-60  p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="bg-yellow-600 p-3 rounded-t-lg">
            <h5 class="text-2xl font-bold tracking-tight text-white">Total Visitor</h5>
        </div>
        <h5 class="mt-4 text-2xl font-bold tracking-tight text-yellow-500">$54000</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">January 2025</p>
    </a>
</div>
<div className="flex flex-col">
<div className='shadow-lg'>
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-semibold">Recent Transactions</h2>
    <a href="#" class="text-blue-500 hover:underline"></a>
  </div>
<div class="overflow-x-auto">
    <table class="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">2023-10-01</td>
          <td class="px-6 py-4 whitespace-nowrap">Rp 150.000</td>
          <td class="px-6 py-4 whitespace-nowrap">10:15 AM</td>
        </tr>
        
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">2023-10-02</td>
          <td class="px-6 py-4 whitespace-nowrap">Rp 200.000</td>
          <td class="px-6 py-4 whitespace-nowrap">02:45 PM</td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">2023-10-02</td>
          <td class="px-6 py-4 whitespace-nowrap">Rp 200.000</td>
          <td class="px-6 py-4 whitespace-nowrap">02:45 PM</td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">2023-10-02</td>
          <td class="px-6 py-4 whitespace-nowrap">Rp 200.000</td>
          <td class="px-6 py-4 whitespace-nowrap">02:45 PM</td>
        </tr>
        
        
        
        
        
       
      </tbody>
    </table>
  </div>
</div>
<div className="flex mt-4">
<a href="#" class="block w-60 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="bg-blue-600 p-3 rounded-t-lg">
            <h5 class="text-2xl font-bold tracking-tight text-white">Net Revenue</h5>
        </div>
        <h5 class="mt-4 text-2xl font-bold tracking-tight text-green-500">$54000</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">January 2025</p>
   
    </a>
    <a href="#" class="block w-60 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="bg-green-600 p-3 rounded-t-lg">
            <h5 class="text-2xl font-bold tracking-tight text-white">Weekly Sales</h5>
        </div>
        <h5 class="mt-4 text-2xl font-bold tracking-tight text-blue-500">$54000</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">January 2025</p>
    </a>
    </div>
</div>
<div className="flex flex-col gap-4">
<UserStats />
<UserStats />
</div>
</div>

      </div>
    );
  }