import { Pressable, StyleSheet, Text, View } from "react-native";

export interface Student {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
}

interface StudentCardProps {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
  onToggleFlag: (id: string) => void;
}

export default function StudentCard({
  id,
  name,
  year,
  flagged,
  onToggleFlag,
}: StudentCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.initials}>{initials}</Text>
      </View>

      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{name}</Text>
        <Text style={styles.studentYear}>{year}</Text>

        <Pressable
          onPress={() => onToggleFlag(id)}
          style={({ pressed }) => [
            styles.flagButton,
            flagged && styles.flaggedButton,
            pressed && styles.pressedButton,
          ]}
        >
          <Text style={styles.flagButtonText}>
            {flagged ? "Flagged for Advising" : "Flag for Advising"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  initials: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1D4ED8",
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1E293B",
  },
  studentYear: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
    marginBottom: 10,
  },
  flagButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 7,
    alignSelf: "flex-start",
  },
  flaggedButton: {
    backgroundColor: "#16A34A",
  },
  pressedButton: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  flagButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});
