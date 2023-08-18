import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { decode } from "html-entities"
import Markdown from "react-native-markdown-display"

const QuestionHeader = ({ question }) => {
	return (
		<Link href={`/${question.question_id}`} asChild>
			<Pressable style={styles.container}>
				<Text style={styles.title}>{decode(question.title)}</Text>
				<Text style={styles.stats}>
					{question.score} vote &bull; {question.answer_count} answers &bull;{" "}
					{question.view_count} views
				</Text>
				<View style={styles.separator}/>
				<Markdown>
					{decode(question.body_markdown)}
				</Markdown>
				<View style={styles.tags}>
					{question.tags.map((tag) => (
						<Text style={styles.tag} key={tag}>
							{tag}
						</Text>
					))}
					<Text style={styles.time}>
						asked {new Date(question.creation_date * 1000).toDateString()}
					</Text>
				</View>
			</Pressable>
		</Link>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderBottomWidth: 0.5,
		borderColor: "lightgray",
	},
	stats: {
		fontSize: 12,
	},
	title: {
		color: "#3b4045",
		marginVertical: 5,
		fontSize: 20,
		fontWeight: "500",
		lineHeight: 28
	},
	body: {
	},
	tags: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 5,
		marginTop: 10,
		alignItems: "center",
	},
	tag: {
		backgroundColor: "#e1ecf4",
		color: "#39739d",
		padding: 5,
		borderRadius: 3,
		overflow: "hidden",
		fontSize: 12,
	},
	time: {
		marginLeft: "auto",
		fontSize: 12,
		color: "dimgray",
	},
	separator: {
		borderBottomWidth: 0.5,
		borderColor: "lightgray",
		marginVertical: 10
	}
});

export default QuestionHeader;
