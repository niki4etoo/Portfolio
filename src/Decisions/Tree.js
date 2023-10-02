class MultiLevelTreeNode {
    constructor(question, options) {
        this.question = question;
        this.options = options;
        this.nextNodes = {};
    }

    addNode(answer, node){
        this.nextNodes[answer] = node;
    }

    askQuestion() {
        console.log(this.question);
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }

    getNextNode(userAnswer){
        return this.nextNodes[userAnswer];
    }
}

// Example usage
