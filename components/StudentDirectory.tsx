import { useState } from "react";

import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import StudentCard, { Student } from "./StudentCard";

const initialStudents: Student[] = [
  {
    id: "s1",
    name: "Ana Cruz",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: "s2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: "s3",
    name: "Cid Ramos",
    year: "4th Year",
    photoUrl: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: "s5",
    name: "Eli Tan",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=5",
  },
];

export default function StudentDirectory() {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const [query, setQuery] = useState("");

  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);

  const toggleFlag = (id: string) => {
    setFlaggedIds((previousIds) =>
      previousIds.includes(id)
        ? previousIds.filter((studentId) => studentId !== id)
        : [...previousIds, id],
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Directory</Text>

      <Text style={styles.subtitle}>Academic Advising List</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search student by name..."
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
              photoUrl={student.photoUrl}
              flagged={flaggedIds.includes(student.id)}
              onToggleFlag={toggleFlag}
            />
          ))
        ) : (
          <Text style={styles.noResults}>No students found.</Text>
        )}
      </ScrollView>

      <Text style={styles.footer}>
        Flagged for Advising: {flaggedIds.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 18,
    paddingTop: 55,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E3A8A",
  },

  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 5,
    marginBottom: 20,
  },

  searchInput: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    marginBottom: 18,
    fontSize: 15,
  },

  listContent: {
    paddingBottom: 15,
  },

  noResults: {
    textAlign: "center",
    color: "#64748B",
    fontSize: 16,
    marginTop: 30,
  },

  footer: {
    textAlign: "center",
    color: "#1E3A8A",
    fontWeight: "bold",
    paddingVertical: 12,
  },
});
