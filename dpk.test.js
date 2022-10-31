const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
    it("Returns the literal '0' when given no input", () => {
        const trivialKey = deterministicPartitionKey();
        expect(trivialKey).toBe("0");
    });

    it("Returns the literal '0' when given an empty string as input", () => {
        const trivialKey = deterministicPartitionKey("");
        expect(trivialKey).toBe("0");
    });

    it("Returns the literal '0' when given an boolean 'false' as input", () => {
        const trivialKey = deterministicPartitionKey(false);
        expect(trivialKey).toBe("0");
    });

    it("Don't return the literal '0' when it's given an input", () => {
        const trivialKey = deterministicPartitionKey("1");
        expect(trivialKey).not.toBe("0");
    });

    it("Don't return the literal '0' when it's given an empty event as input", () => {
        const input = {};

        const trivialKey = deterministicPartitionKey(input);
        expect(trivialKey).not.toBe("0");
    });

    it("Returns the literal 'abc' when given an event with a partitionKey 'abc' as input", () => {
        const input = {
            partitionKey: "abc",
        };

        const trivialKey = deterministicPartitionKey(input);
        expect(trivialKey).toBe(input.partitionKey);
    });

    it("Don't return the partition key when it's bigger it's length it's bigger than 256", () => {
        const input = {
            partitionKey:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in mi ornare, sollicitudin ex vehicula, volutpat metus. Donec eu eros varius, tempus eros porta, tincidunt leo. Aliquam id blandit purus. Integer ac odio eget leo finibus euismod et in metus. Mauris at porta est.",
        };

        const trivialKey = deterministicPartitionKey(input);
        expect(trivialKey).not.toBe(input.partitionKey);
    });
});
