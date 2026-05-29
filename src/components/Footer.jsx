export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-gray-500 text-xs py-6 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        <div>
          <p className="font-bold text-gray-700">NexusAcademy System</p>
          <p className="mt-1">© 2026 All Rights Reserved.</p>
        </div>

        <div className="flex gap-4 text-gray-600">
          <a href="#" className="hover:text-teal-600 underline transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-teal-600 underline transition-colors">Terms of Service</a>
        </div>

      </div>
    </footer>
  );
}