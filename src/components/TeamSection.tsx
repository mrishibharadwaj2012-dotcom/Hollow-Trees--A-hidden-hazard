import React, { useState } from 'react';
import { User, Users, GraduationCap, School, Calendar, Award, Edit3, Check } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const TeamSection: React.FC = () => {
  // Allow editable placeholders directly from UI so team can personalize their exhibition details
  const [isEditing, setIsEditing] = useState(false);
  const [ncscYear, setNcscYear] = useState('2025–2026');
  const [schoolName, setSchoolName] = useState('Kendriya Vidyalaya / High School (IIT Kharagpur Cluster)');
  const [student1Name, setStudent1Name] = useState('Student Lead Investigator');
  const [student1Class, setStudent1Class] = useState('Class 9-A');
  const [student2Name, setStudent2Name] = useState('Student Co-Investigator');
  const [student2Class, setStudent2Class] = useState('Class 9-B');
  const [guideTeacher, setGuideTeacher] = useState('Science Teacher / Project Guide');
  const [guideAffiliation, setGuideAffiliation] = useState('Department of Science & Physics');
  const [facultyCoordinator, setFacultyCoordinator] = useState('Academic Coordinator / Mentor');

  return (
    <section id="team" className="py-16 md:py-24 bg-[#F8F9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 16 · Research Personnel
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            National Children’s Science Congress Project
          </h2>
          <p className="mt-2 text-base sm:text-lg text-emerald-950 font-serif italic">
            “{PROJECT_METADATA.title}”
          </p>
        </div>

        {/* Project Credentials Header & Year Banner */}
        <div className="bg-white rounded-xl border border-stone-300 p-6 mb-10 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#163828] text-white flex items-center justify-center font-bold font-serif text-base">
              NCSC
            </div>
            <div>
              <div className="font-bold text-stone-900 text-sm">
                Official NCSC Project Registration
              </div>
              <div className="text-xs text-stone-600">
                Senior / Junior Division · Science & Technology for Disaster Risk Reduction
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-stone-700">
              <Calendar className="w-4 h-4 text-[#163828]" />
              <strong>Congress Year: </strong> {ncscYear}
            </span>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-stone-300 text-stone-700 bg-stone-50 hover:bg-stone-100 transition-colors text-xs font-semibold cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Save Changes' : 'Edit Placeholders'}</span>
            </button>
          </div>
        </div>

        {/* Editable Inline Inputs if isEditing is true */}
        {isEditing && (
          <div className="mb-10 p-6 bg-amber-50/70 border border-amber-300 rounded-xl space-y-4 text-xs">
            <div className="font-bold text-amber-950 font-mono uppercase">
              Update Student & School Credentials for Exhibition
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-stone-800 mb-1">NCSC Year</label>
                <input
                  type="text"
                  value={ncscYear}
                  onChange={(e) => setNcscYear(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-800 mb-1">School / Institution</label>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-800 mb-1">Student 1 Name</label>
                <input
                  type="text"
                  value={student1Name}
                  onChange={(e) => setStudent1Name(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-800 mb-1">Student 1 Class & Section</label>
                <input
                  type="text"
                  value={student1Class}
                  onChange={(e) => setStudent1Class(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-800 mb-1">Student 2 Name</label>
                <input
                  type="text"
                  value={student2Name}
                  onChange={(e) => setStudent2Name(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-800 mb-1">Student 2 Class & Section</label>
                <input
                  type="text"
                  value={student2Class}
                  onChange={(e) => setStudent2Class(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-800 mb-1">Guide Teacher</label>
                <input
                  type="text"
                  value={guideTeacher}
                  onChange={(e) => setGuideTeacher(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-800 mb-1">Faculty / Coordinator</label>
                <input
                  type="text"
                  value={facultyCoordinator}
                  onChange={(e) => setFacultyCoordinator(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs"
                />
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-[#163828] text-white rounded text-xs font-semibold cursor-pointer"
              >
                Done Editing
              </button>
            </div>
          </div>
        )}

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Student Lead */}
          <div className="bg-white rounded-xl p-6 border border-stone-300 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#163828]/10 text-[#163828] flex items-center justify-center mb-4">
                <User className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-[#8B5A2B] uppercase">
                Student Lead Investigator
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mt-1 mb-1">
                {student1Name}
              </h3>
              <div className="text-xs text-stone-600 font-mono mb-3">
                Class: {student1Class}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Project conceptualization, literature review, ultrasonic wave equations, and field methodology design.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-500">
              Primary Presenter
            </div>
          </div>

          {/* Card 2: Student Co-Investigator */}
          <div className="bg-white rounded-xl p-6 border border-stone-300 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#163828]/10 text-[#163828] flex items-center justify-center mb-4">
                <User className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-[#8B5A2B] uppercase">
                Student Co-Investigator
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mt-1 mb-1">
                {student2Name}
              </h3>
              <div className="text-xs text-stone-600 font-mono mb-3">
                Class: {student2Class}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Campus tree observations, physical demonstration model fabrication, logbook maintenance, and exhibition display.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-500">
              Field & Hardware Lead
            </div>
          </div>

          {/* Card 3: Guide Teacher */}
          <div className="bg-white rounded-xl p-6 border border-stone-300 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-stone-500 uppercase">
                Project Guide & Teacher
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mt-1 mb-1">
                {guideTeacher}
              </h3>
              <div className="text-xs text-stone-600 font-mono mb-3">
                {guideAffiliation}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Scientific methodology guidance, safety protocols, NCSC guidelines compliance, and critical review.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-500">
              Faculty Mentor
            </div>
          </div>

          {/* Card 4: Institution & Campus Mentorship */}
          <div className="bg-white rounded-xl p-6 border border-stone-300 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center mb-4">
                <School className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-stone-500 uppercase">
                Institution & Mentorship
              </span>
              <h3 className="font-serif text-base font-bold text-stone-900 mt-1 mb-1">
                {schoolName}
              </h3>
              <div className="text-xs text-stone-600 font-mono mb-3">
                {facultyCoordinator}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Institutional workshop support and campus walking survey access across the IIT Kharagpur precinct.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-500">
              Participating School Wing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
