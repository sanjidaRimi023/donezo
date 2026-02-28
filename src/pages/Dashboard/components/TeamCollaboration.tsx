import { Plus } from "lucide-react";
import Button from "../../../components/Button";
import { useDashboard } from "../../../hooks/useDashboard";

export const TeamCollaboration = () => {
  const { data, loading } = useDashboard();

  if (loading) return <div className="h-64 bg-gray-100 animate-pulse rounded-2xl"></div>;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">Team Collaboration</h3>
        <Button variant="outline" className="text-xs">
          <Plus size={20}/>
           Add Member
        </Button>
      </div>

      <div className="space-y-6">
        {data?.users.slice(0, 4).map((user, index) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl overflow-hidden ${index % 2 === 0 ? 'bg-pink-100' : 'bg-green-100'}`}>
                 <span className="grayscale">👤</span>
              </div>
              <div>
                <p className="font-bold text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-400">
                  Working on <span className="text-gray-700 font-medium">Dashboard Logic</span>
                </p>
              </div>
            </div>
            
            <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
              user.status === 'active' 
              ? 'bg-green-50 text-green-600' 
              : 'bg-yellow-50 text-yellow-600'
            }`}>
              {user.status === 'active' ? 'Completed' : 'In Progress'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};