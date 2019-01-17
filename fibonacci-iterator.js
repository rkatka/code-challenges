function* getFibSequence() {
    let twoAgo = 1;
    let oneAgo = 0;

    while (true) {
        let nextValue = twoAgo + oneAgo;
        yield nextValue;
        twoAgo = oneAgo;
        oneAgo = nextValue;
    }
}