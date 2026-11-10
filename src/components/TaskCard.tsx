import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS, SPACE, RADIUS, TYPO } from "../styles/tokens";

type Props = {
  title: string;
  course: string;
  dueDate: string;
  priority: "Tinggi" | "Sedang" | "Rendah";
  completed: boolean;
  onPress: () => void;
  onToggle: () => void;
  onDelete: () => void;
};

export default function TaskCard({
  title,
  course,
  dueDate,
  priority,
  completed,
  onPress,
  onToggle,
  onDelete,
}: Props) {
  const priorityColor =
    priority === "Tinggi"
      ? "#ef4444"
      : priority === "Sedang"
        ? "#f59e0b"
        : "#10b981";

  return (
    <Pressable
      style={[styles.card, completed && styles.completedCard]}
      onPress={onPress}
    >
      <Pressable
        style={[styles.checkbox, completed && styles.checkedBox]}
        onPress={onToggle}
      >
        <Text style={styles.checkMark}>{completed ? "✓" : ""}</Text>
      </Pressable>

      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.course}>{course}</Text>
          <View
            style={[styles.badge, { backgroundColor: priorityColor + "20" }]}
          >
            <Text style={[styles.badgeText, { color: priorityColor }]}>
              {priority}
            </Text>
          </View>
        </View>

        <Text
          style={[styles.title, completed && styles.titleCompleted]}
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text style={styles.date}>📅 Deadline: {dueDate}</Text>
      </View>

      <Pressable style={styles.deleteBtn} onPress={onDelete}>
        <Text style={styles.deleteText}>🗑️</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.card,
    padding: SPACE.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: SPACE.m,
  },
  completedCard: {
    backgroundColor: "#f1f5f9",
    opacity: 0.75,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  checkedBox: {
    backgroundColor: COLORS.primary,
  },
  checkMark: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  info: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  course: {
    fontSize: TYPO.caption,
    fontWeight: "600",
    color: COLORS.primary,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
  },
  title: {
    fontSize: TYPO.title,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 4,
  },
  titleCompleted: {
    textDecorationLine: "line-through",
    color: COLORS.muted,
  },
  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
  },
  deleteBtn: {
    padding: 6,
  },
  deleteText: {
    fontSize: 16,
  },
});
