import React, { useState } from 'react';
import { Search, ChevronDown, X, Play, Star, FileText, Users, Grid, MoreVertical, Book, Settings, Layers, GitBranch, Plus, Trash2, Edit, Lock } from 'lucide-react';

function App() {
  const [showFindPeople, setShowFindPeople] = useState(false);
  const [activeTab, setActiveTab] = useState('My Grids');
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    jobTitle: false,
    companyWebsite: false,
    personLocation: false,
    companyLocation: false,
    companyHeadcount: false,
    managementLevel: false
  });

  const [filters, setFilters] = useState({
    peopleKeyword: '',
    jobTitle: '',
    companyWebsite: '',
    personLocation: '',
    companyLocation: '',
    companyHeadcount: '',
    managementLevel: ''
  });

  const [grids, setGrids] = useState([
    { id: 1, name: 'Workbook - Testing design ideas for grid and workbook', editor: 'Sam Taylor', avatar: '👤', date: '06 Aug, 2025', starred: false, icon: '📊' },
    { id: 2, name: 'LinkedIn', editor: 'Chris Parker', avatar: '👤', date: '06 Aug, 2025', starred: false, icon: '💼' },
    { id: 3, name: 'Sales nav', editor: 'Jone Doe', avatar: '👤', date: '06 Aug, 2025', starred: false, icon: '🔵' },
    { id: 4, name: 'find company', editor: 'Alex Morgan', avatar: '👤', date: '06 Aug, 2025', starred: true, icon: '🔍' },
    { id: 5, name: 'import csv', editor: 'Drew Wilson', avatar: '👤', date: '06 Aug, 2025', starred: true, icon: '📄' },
    { id: 6, name: 'Find people', editor: 'Jone Doe', avatar: '👤', date: '06 Aug, 2025', starred: true, icon: '👥' },
    { id: 7, name: 'Google maps', editor: 'Jone Doe', avatar: '👤', date: '06 Aug, 2025', starred: false, icon: '🗺️' },
    { id: 8, name: 'google search results', editor: 'Jone Doe', avatar: '👤', date: '06 Aug, 2025', starred: false, icon: '🔍' },
    { id: 9, name: 'factors', editor: 'Jone Doe', avatar: '👤', date: '06 Aug, 2025', starred: true, icon: '⚡' },
    { id: 10, name: 'Hubspot List - 10 [05 Aug 25]', editor: 'Jone Doe', avatar: '👤', date: '06 Aug, 2025', starred: true, icon: '🔄' }
  ]);

  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleStar = (id) => {
    setGrids(prev => prev.map(grid => 
      grid.id === id ? { ...grid, starred: !grid.starred } : grid
    ));
  };

  const deleteGrid = (id) => {
    if (window.confirm('Are you sure you want to delete this grid?')) {
      setGrids(prev => prev.filter(grid => grid.id !== id));
    }
  };

  const handlePreview = () => {
    const hasFilters = Object.values(filters).some(val => val.trim() !== '');
    
    if (!hasFilters) {
      alert('Please add at least one filter to preview results');
      return;
    }

    const mockResults = [
      { name: 'John Smith', title: 'Software Engineer', headline: 'Building amazing products', company: 'Tech Corp', linkedinUrl: 'linkedin.com/in/johnsmith', companyUrl: 'techcorp.com' },
      { name: 'Sarah Johnson', title: 'Product Manager', headline: 'Leading product innovation', company: 'Innovation Labs', linkedinUrl: 'linkedin.com/in/sarahj', companyUrl: 'innovationlabs.com' },
      { name: 'Mike Chen', title: 'Data Scientist', headline: 'AI & ML enthusiast', company: 'DataWorks', linkedinUrl: 'linkedin.com/in/mikechen', companyUrl: 'dataworks.io' },
      { name: 'Emily Davis', title: 'UX Designer', headline: 'Creating delightful experiences', company: 'Design Studio', linkedinUrl: 'linkedin.com/in/emilyd', companyUrl: 'designstudio.com' },
      { name: 'Alex Brown', title: 'Marketing Director', headline: 'Growth & brand strategy', company: 'MarketPro', linkedinUrl: 'linkedin.com/in/alexb', companyUrl: 'marketpro.com' }
    ];

    setSearchResults(mockResults);
    setShowResults(true);
  };

  const tasks = [
    { label: 'Create your data list', completed: true },
    { label: 'Connect an integration', completed: true },
    { label: 'Learn about BitAgent', completed: false },
    { label: 'Customise waterfall providers', completed: false }
  ];

  const filteredGrids = grids.filter(grid => {
    if (activeTab === 'Starred') {
      return grid.starred && grid.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return grid.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard':
        return (
          <div className="p-8">
            {/* Latest from Bitscale */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Latest from Bitscale</h3>
              <div className="bg-white rounded-lg p-4 flex gap-4 shadow-sm">
                <div className="relative w-48 h-32 bg-gray-900 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'%3E%3Crect fill='%231e293b' width='200' height='150'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='14' font-family='monospace'%3ECode Demo%3C/text%3E%3C/svg%3E" alt="Video thumbnail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-gray-900 ml-1" />
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">How to integrate 2 Way HubSpot</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Prerequisites for this integration is that you should have a HubSpot account and Copy the API key. We
                    simple add our API key through the integrations pa...
                  </p>
                  <p className="text-xs text-gray-400">Posted today</p>
                </div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Complete product demo</h3>
                  <p className="text-sm text-gray-500">75% of users nailed BitScale after this walkthrough</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-teal-600">75%</span>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" style={{width: '75%'}} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      task.completed ? 'bg-teal-600 border-teal-600' : 'border-gray-300'
                    }`}>
                      {task.completed && <span className="text-white text-xs">✓</span>}
                    </div>
                    <span className={`text-sm ${task.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                      {task.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grids Section */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex gap-6">
                  <button
                    onClick={() => setActiveTab('My Grids')}
                    className={`text-sm font-medium pb-2 ${
                      activeTab === 'My Grids' 
                        ? 'text-teal-600 border-b-2 border-teal-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    My Grids ({grids.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('Starred')}
                    className={`text-sm font-medium pb-2 ${
                      activeTab === 'Starred' 
                        ? 'text-teal-600 border-b-2 border-teal-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Starred ({grids.filter(g => g.starred).length})
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search grids and workbooks..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Grid className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-12"></th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Edited by</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last edited</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-20">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredGrids.length > 0 ? (
                      filteredGrids.map((grid) => (
                        <tr key={grid.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => toggleStar(grid.id)}
                              className="text-gray-400 hover:text-yellow-500 transition-colors"
                            >
                              <Star className={`w-5 h-5 ${grid.starred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <span className="text-lg">{grid.icon}</span>
                              <span className="text-sm font-medium text-gray-900">{grid.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                              <span className="text-sm text-gray-700">{grid.editor}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-600">{grid.date}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1">
                              <button 
                                onClick={() => deleteGrid(grid.id)}
                                className="p-1 hover:bg-red-100 rounded transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                          No grids found. Try adjusting your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'playbooks':
        return (
          <div className="p-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-teal-600" />
                <h2 className="text-2xl font-semibold">Playbooks</h2>
              </div>
              <p className="text-gray-600 mb-6">Create and manage automated workflows for your sales and marketing processes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-6 hover:border-teal-500 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold">Lead Enrichment</h3>
                  </div>
                  <p className="text-sm text-gray-600">Automatically enrich leads with company and contact information</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-teal-500 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold">Outreach Sequence</h3>
                  </div>
                  <p className="text-sm text-gray-600">Create multi-step email campaigns for prospects</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-teal-500 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold">Lead Scoring</h3>
                  </div>
                  <p className="text-sm text-gray-600">Score and prioritize leads based on engagement</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-teal-500 transition-colors cursor-pointer flex items-center justify-center">
                  <div className="text-center">
                    <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 font-medium">Create New Playbook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="p-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-8 h-8 text-teal-600" />
                <h2 className="text-2xl font-semibold">Integrations</h2>
              </div>
              <p className="text-gray-600 mb-6">Connect Bitscale with your favorite tools and platforms.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'HubSpot', icon: '🔄', status: 'Connected', color: 'bg-orange-100 text-orange-600' },
                  { name: 'Salesforce', icon: '☁️', status: 'Connected', color: 'bg-blue-100 text-blue-600' },
                  { name: 'LinkedIn', icon: '💼', status: 'Connected', color: 'bg-blue-100 text-blue-600' },
                  { name: 'Gmail', icon: '📧', status: 'Available', color: 'bg-gray-100 text-gray-600' },
                  { name: 'Slack', icon: '💬', status: 'Available', color: 'bg-gray-100 text-gray-600' },
                  { name: 'Zapier', icon: '⚡', status: 'Available', color: 'bg-gray-100 text-gray-600' }
                ].map((integration, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-teal-500 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                          {integration.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{integration.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${integration.color}`}>
                            {integration.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                      integration.status === 'Connected' 
                        ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                        : 'bg-teal-600 text-white hover:bg-teal-700'
                    }`}>
                      {integration.status === 'Connected' ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'documentation':
        return (
          <div className="p-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Book className="w-8 h-8 text-teal-600" />
                <h2 className="text-2xl font-semibold">Documentation</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Getting Started Guide', description: 'Learn the basics of Bitscale', time: '5 min read' },
                  { title: 'API Documentation', description: 'Complete API reference and examples', time: '15 min read' },
                  { title: 'Advanced Features', description: 'Master advanced workflows and automation', time: '10 min read' },
                  { title: 'Best Practices', description: 'Tips for optimal usage', time: '8 min read' },
                  { title: 'Troubleshooting', description: 'Common issues and solutions', time: '7 min read' }
                ].map((doc, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-teal-500 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{doc.title}</h3>
                        <p className="text-sm text-gray-600">{doc.description}</p>
                      </div>
                      <div className="text-xs text-gray-500">{doc.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="p-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-8 h-8 text-teal-600" />
                <h2 className="text-2xl font-semibold">Settings</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Profile Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input type="text" defaultValue="Tim" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" defaultValue="tim@bitscale.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-3">Notification Preferences</h3>
                  <div className="space-y-3">
                    {['Email notifications', 'Desktop notifications', 'Weekly reports'].map((item, idx) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500" />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-3 text-red-600">Danger Zone</h3>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-48 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold italic">Bitscale</h1>
        </div>
        
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-semibold">
              GT
            </div>
            <span className="text-sm font-medium">GTM Spaces</span>
            <ChevronDown className="w-4 h-4 ml-auto text-gray-400" />
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 mb-3">Home</h3>
            <button 
              onClick={() => setActiveSection('dashboard')}
              className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg font-medium transition-colors ${
                activeSection === 'dashboard' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Grid className="w-4 h-4" />
              My Dashboard
            </button>
          </div>
          
          <div className="mb-6">
            <button 
              onClick={() => setActiveSection('playbooks')}
              className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                activeSection === 'playbooks' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              Playbooks
            </button>
            <button 
              onClick={() => setActiveSection('integrations')}
              className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                activeSection === 'integrations' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Layers className="w-4 h-4" />
              Integrations
            </button>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 mb-3">Other</h3>
            <button 
              onClick={() => setActiveSection('documentation')}
              className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                activeSection === 'documentation' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Book className="w-4 h-4" />
              Documentation
            </button>
            <button 
              onClick={() => setActiveSection('settings')}
              className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                activeSection === 'settings' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <span className="italic font-bold">Bitscale</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <p className="text-xs text-gray-500 mt-1">Get Support at Bitscale</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Welcome back, Tim!</h2>
            <p className="text-sm text-gray-500 mt-1">Here's your daily scoop on Bitscale!</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm">
              <span className="text-green-600">💎</span>
              <span className="font-medium">450000/5500000</span>
            </div>
            <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Booster Plan
            </span>
            <button 
              onClick={() => setShowFindPeople(false)}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg flex items-center gap-2 hover:bg-teal-700 transition-colors"
            >
              <Users className="w-4 h-4" />
              Find Companies
            </button>
            <button 
              onClick={() => setShowFindPeople(true)}
              className="px-4 py-2 bg-white border border-teal-600 text-teal-600 rounded-lg flex items-center gap-2 hover:bg-teal-50 transition-colors"
            >
              <Users className="w-4 h-4" />
              Find People
            </button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
              + New Grid
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-400" />
          </div>
        </header>

        {/* Content */}
        {renderContent()}
      </main>

      {/* Find People Modal */}
      {showFindPeople && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex shadow-2xl animate-in fade-in duration-200">
            {/* Left Panel - Search Filters */}
            <div className="w-96 border-r border-gray-200 flex flex-col">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Find People</h3>
                  <button 
                    onClick={() => setShowFindPeople(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <button className="text-sm text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1">
                  <ChevronDown className="w-4 h-4" />
                  Saved Search
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* People Keyword */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Users className="w-4 h-4" />
                    People Keyword
                  </label>
                  <input
                    type="text"
                    placeholder="Enter single keyword here..."
                    value={filters.peopleKeyword}
                    onChange={(e) => handleFilterChange('peopleKeyword', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* Job Title */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('jobTitle')}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm font-medium">Job Title</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.jobTitle ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedSections.jobTitle && (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <input
                        type="text"
                        placeholder="E.g: Manager, Software Engineer"
                        value={filters.jobTitle}
                        onChange={(e) => handleFilterChange('jobTitle', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  )}
                </div>

                {/* Company Website */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('companyWebsite')}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4" />
                      <span className="text-sm font-medium">Company Website</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.companyWebsite ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedSections.companyWebsite && (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <input
                        type="text"
                        placeholder="Eg: Google.com, LinkedIn.com"
                        value={filters.companyWebsite}
                        onChange={(e) => handleFilterChange('companyWebsite', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  )}
                </div>

                {/* Person Location */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('personLocation')}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📍</span>
                      <span className="text-sm font-medium">Person Location</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.personLocation ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedSections.personLocation && (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <input
                        type="text"
                        placeholder="Eg: London, Great New York City"
                        value={filters.personLocation}
                        onChange={(e) => handleFilterChange('personLocation', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  )}
                </div>

                {/* Company Location */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('companyLocation')}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📍</span>
                      <span className="text-sm font-medium">Company Location</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.companyLocation ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedSections.companyLocation && (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <input
                        type="text"
                        placeholder="E.g: United States, UAE"
                        value={filters.companyLocation}
                        onChange={(e) => handleFilterChange('companyLocation', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  )}
                </div>

                {/* Company Headcount */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('companyHeadcount')}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">Company Headcount</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.companyHeadcount ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedSections.companyHeadcount && (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <select
                        value={filters.companyHeadcount}
                        onChange={(e) => handleFilterChange('companyHeadcount', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select range</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501-1000">501-1000</option>
                        <option value="1000+">1000+</option>
                        <option value="10000+">10000+</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Management Level */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('managementLevel')}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">👔</span>
                      <span className="text-sm font-medium">Management Level</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.managementLevel ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedSections.managementLevel && (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <select
                        value={filters.managementLevel}
                        onChange={(e) => handleFilterChange('managementLevel', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select level</option>
                        <option value="Owner">Owner</option>
                        <option value="Founder">Founder</option>
                        <option value="C-Level">C-Level</option>
                        <option value="VP">VP</option>
                        <option value="Director">Director</option>
                        <option value="Manager">Manager</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-3">
                <button className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Save Search
                </button>
                <button 
                  onClick={handlePreview}
                  className="flex-1 px-4 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Preview Result
                </button>
              </div>
            </div>

            {/* Right Panel - Results */}
            <div className="flex-1 flex flex-col">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      Found <span className="font-semibold text-gray-900">{searchResults.length}</span> {searchResults.length === 1 ? 'person' : 'people'}
                      {!showResults && '. Click preview to view results'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-lg">
                    <Lock className="w-3 h-3 text-orange-700" />
                    <span className="text-xs text-orange-700">Unlock </span>
                    <span className="text-xs font-semibold text-orange-700">100,000 leads</span>
                    <span className="text-xs text-orange-700"> with EnterprisePlan+</span>
                  </div>
                </div>
                <div className="flex gap-2 text-xs text-gray-600 uppercase overflow-x-auto">
                  <div className="px-3 py-2 bg-gray-50 rounded">Name</div>
                  <div className="px-3 py-2 bg-gray-50 rounded">Title</div>
                  <div className="px-3 py-2 bg-gray-50 rounded">Headline</div>
                  <div className="px-3 py-2 bg-gray-50 rounded">LinkedIn URL</div>
                  <div className="px-3 py-2 bg-gray-50 rounded">Company</div>
                  <div className="px-3 py-2 bg-gray-50 rounded">Company URL</div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {!showResults ? (
                  <div className="flex items-center justify-center h-full p-8">
                    <div className="text-center max-w-md">
                      <div className="mb-6">
                        <svg className="w-64 h-64 mx-auto" viewBox="0 0 200 200">
                          <rect x="40" y="60" width="60" height="80" rx="4" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="2"/>
                          <circle cx="70" cy="85" r="12" fill="#60a5fa"/>
                          <rect x="54" y="105" width="32" height="4" rx="2" fill="#93c5fd"/>
                          <rect x="54" y="115" width="24" height="4" rx="2" fill="#93c5fd"/>
                          <rect x="54" y="125" width="28" height="4" rx="2" fill="#93c5fd"/>
                          
                          <circle cx="145" cy="90" r="25" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
                          <circle cx="145" cy="85" r="8" fill="#60a5fa"/>
                          <path d="M 135 105 Q 145 115 155 105" stroke="#60a5fa" strokeWidth="2" fill="none"/>
                          
                          <path d="M 100 100 L 120 90" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 mb-2">
                        Start your People search, preview, and import contacts
                      </p>
                      <p className="text-gray-500 text-sm">
                        for enrichment by applying any filter in the left panel.
                      </p>
                      <p className="text-gray-400 text-xs mt-4">OR</p>
                      <p className="text-gray-500 text-sm mt-2">
                        Import people from saved Search.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <table className="w-full">
                        <tbody className="divide-y divide-gray-200">
                          {searchResults.map((result, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold">
                                    {result.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div>
                                    <div className="font-medium text-sm">{result.name}</div>
                                    <div className="text-xs text-gray-500">{result.title}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="text-sm text-gray-600">{result.headline}</div>
                              </td>
                              <td className="px-4 py-3">
                                <a href={`https://${result.linkedinUrl}`} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:underline">
                                  {result.linkedinUrl}
                                </a>
                              </td>
                              <td className="px-4 py-3">
                                <div className="text-sm font-medium">{result.company}</div>
                                <a href={`https://${result.companyUrl}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:underline">
                                  {result.companyUrl}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;